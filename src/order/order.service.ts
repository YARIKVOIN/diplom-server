import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { Order } from './order.model';
import { IOrderFilter, IOrderQuery } from './types';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order)
    private OrderModel: typeof Order,
  ) {}

  async paginateAndFilter(
    query: IOrderQuery,
  ): Promise<{ count: number; rows: Order[] }> {
    const limit = +query.limit;
    const offset = +query.offset * 20;

    const filter = {} as Partial<IOrderFilter>;

    if (query.priceFrom && query.priceTo) {
      filter.price = {
        [Op.between]: [+query.priceFrom, +query.priceTo],
      };
    }

    if (query.order) {
      filter.model = JSON.parse(decodeURIComponent(query.order));
    }

    if (query.parts) {
      filter.memory = JSON.parse(decodeURIComponent(query.parts));
    }

    return this.OrderModel.findAndCountAll({
      limit,
      offset,
      where: filter,
    });
  }

  async findAll(): Promise<Order[]> {
    return this.OrderModel.findAll();
  }

  async findOneByName(login: string): Promise<Order[]> {
    return this.OrderModel.findAll({ where: { login } });
  }

  async findOneByNameStatus(login: string, status: string): Promise<Order> {
    return this.OrderModel.findOne({ where: { login, status} });
  }

  async create(productData): Promise<Order> {
    const product = new Order(productData);
    return await product.save();
  }
  async update(id: number, productData): Promise<[number, Order[]]> {
    const [affectedCount, affectedRows] = await this.OrderModel.update(productData, {
      where: { id },
      returning: true, 
    });
    return [affectedCount, affectedRows as Order[]];
  }

  async remove(id: number): Promise<number> {
    return this.OrderModel.destroy({ where: { id } });
  }

  async getbyid(id: number): Promise<Order> {
    return this.OrderModel.findOne({ where: { id } });
  }
  async searchByString(
    login: string,
  ): Promise<{ count: number; rows: Order[] }> {
    return this.OrderModel.findAndCountAll({
      where: { login },
    });
  }
}

