import { DataTypes } from 'sequelize';
import { Table, Model, Column } from 'sequelize-typescript';

@Table
export class Category extends Model {
  @Column
  category: string;
}
