import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { Proizvoditel } from './proizvoditel.model';
import { IOrderFilter, IOrderQuery } from './types';

@Injectable()
export class ProizvoditelService {
  constructor(
    @InjectModel(Proizvoditel)
    private ProizvoditelModel: typeof Proizvoditel,
  ) {}


  async findAll(): Promise<Proizvoditel[]> {
    return this.ProizvoditelModel.findAll();
  }

  async create(productData): Promise<Proizvoditel> {
    const product = new Proizvoditel(productData);
    return await product.save();
  }
  async update(id: number, productData): Promise<[number, Proizvoditel[]]> {
    const [affectedCount, affectedRows] = await this.ProizvoditelModel.update(productData, {
      where: { id },
      returning: true, 
    });
    return [affectedCount, affectedRows as Proizvoditel[]];
  }

  async remove(id: number): Promise<number> {
    return this.ProizvoditelModel.destroy({ where: { id } });
  }

  async getbyid(id: number): Promise<Proizvoditel> {
    return this.ProizvoditelModel.findOne({ where: { id } });
  }
}

