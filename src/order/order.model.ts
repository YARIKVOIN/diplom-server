import { DataTypes } from 'sequelize';
import { Table, Model, Column } from 'sequelize-typescript';

@Table
export class Order extends Model {
  @Column
  orderlist: string;

  @Column
  fullprice: number;

  @Column
  login: string;

  @Column
  email: string;

  @Column
  status: string;
}
