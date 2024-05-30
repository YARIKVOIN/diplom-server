import { DataTypes } from 'sequelize';
import { Table, Model, Column } from 'sequelize-typescript';

@Table
export class Atributes extends Model {
  @Column
  atributes: string;
}
