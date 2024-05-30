import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { Atributes } from './atributes.model';
import { IOrderFilter, IOrderQuery } from './types';

@Injectable()
export class AtributesService {
  constructor(
    @InjectModel(Atributes)
    private AtributesModel: typeof Atributes,
  ) {}


  async findAll(): Promise<Atributes[]> {
    return this.AtributesModel.findAll();
  }

  async create(productData): Promise<Atributes> {
    const product = new Atributes(productData);
    return await product.save();
  }
  async update(id: number, productData): Promise<[number, Atributes[]]> {
    const [affectedCount, affectedRows] = await this.AtributesModel.update(productData, {
      where: { id },
      returning: true, 
    });
    return [affectedCount, affectedRows as Atributes[]];
  }

  async remove(id: number): Promise<number> {
    return this.AtributesModel.destroy({ where: { id } });
  }

  async getbyid(id: number): Promise<Atributes> {
    return this.AtributesModel.findOne({ where: { id } });
  }
}

