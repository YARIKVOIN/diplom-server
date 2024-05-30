import { DataTypes } from 'sequelize';
import { Table, Model, Column } from 'sequelize-typescript';

@Table
export class Proizvoditel extends Model {
  @Column
  proizvoditel: string;
}
