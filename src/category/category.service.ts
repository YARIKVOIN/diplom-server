import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { Category } from './category.model';
import { IOrderFilter, IOrderQuery } from './types';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category)
    private CategoryModel: typeof Category,
  ) {}


  async findAll(): Promise<Category[]> {
    return this.CategoryModel.findAll();
  }

  async create(productData): Promise<Category> {
    const product = new Category(productData);
    return await product.save();
  }
  async update(id: number, productData): Promise<[number, Category[]]> {
    const [affectedCount, affectedRows] = await this.CategoryModel.update(productData, {
      where: { id },
      returning: true, 
    });
    return [affectedCount, affectedRows as Category[]];
  }

  async remove(id: number): Promise<number> {
    return this.CategoryModel.destroy({ where: { id } });
  }

  async getbyid(id: number): Promise<Category> {
    return this.CategoryModel.findOne({ where: { id } });
  }
}

