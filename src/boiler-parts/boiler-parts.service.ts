import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { BoilerParts } from './boiler-parts.model';
import { IBoilerPartsFilter, IBoilerPartsQuery } from './types';

@Injectable()
export class BoilerPartsService {
  constructor(
    @InjectModel(BoilerParts)
    private boilerPartsModel: typeof BoilerParts,
  ) {}

  async paginateAndFilter(
    query: IBoilerPartsQuery,
  ): Promise<{ count: number; rows: BoilerParts[] }> {
    const limit = +query.limit;
    const offset = +query.offset * 20;
    const filter = {} as Partial<IBoilerPartsFilter>;

    if (query.priceFrom && query.priceTo) {
      filter.price = {
        [Op.between]: [+query.priceFrom, +query.priceTo],
      };
    }

    if (query.boiler) {
      filter.model = JSON.parse(decodeURIComponent(query.boiler));
    }

    if (query.parts) {
      filter.memory = JSON.parse(decodeURIComponent(query.parts));
    }

    return this.boilerPartsModel.findAndCountAll({
      limit,
      offset,
      where: filter,
    });
  }

  async bestsellers(): Promise<{ count: number; rows: BoilerParts[] }> {
    return this.boilerPartsModel.findAndCountAll({
      where: { bestseller: true },
    });
  }

  async new(): Promise<{ count: number; rows: BoilerParts[] }> {
    return this.boilerPartsModel.findAndCountAll({
      where: { new: true },
    });
  }

  async findOne(id: number | string): Promise<BoilerParts> {
    return this.boilerPartsModel.findOne({
      where: { id },
    });
  }

  async findOneByName(name: string): Promise<BoilerParts> {
    return this.boilerPartsModel.findOne({
      where: { name },
    });
  }

  async searchByString(
    str: string,
  ): Promise<{ count: number; rows: BoilerParts[] }> {
    return this.boilerPartsModel.findAndCountAll({
      limit: 20,
      where: { name: { [Op.like]: `%${str}%` } },
    });
  }

  async create(productData): Promise<BoilerParts> {
    const product = new BoilerParts(productData);
    return await product.save();
  }
  async update(id: number, productData): Promise<[number, BoilerParts[]]> {
    const [affectedCount, affectedRows] = await this.boilerPartsModel.update(productData, {
      where: { id },
      returning: true, 
    });
    return [affectedCount, affectedRows as BoilerParts[]];
  }

  async remove(id: number): Promise<number> {
    return this.boilerPartsModel.destroy({ where: { id } });
  }
  
  async findAll(): Promise<BoilerParts[]> {
    return this.boilerPartsModel.findAll();
  }
}