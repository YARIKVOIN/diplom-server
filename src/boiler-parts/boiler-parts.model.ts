import { DataTypes } from 'sequelize';
import { Table, Model, Column } from 'sequelize-typescript';

@Table
export class BoilerParts extends Model {
  @Column
  memory: string;

  @Column({ defaultValue: 0 })
  price: number;

  @Column
  atributes: string;

  @Column
  name: string;

  @Column
  description: string;

  @Column
  images: string;

  @Column
  model: string;

  @Column({ defaultValue: false })
  bestseller: boolean;

  @Column({ defaultValue: false })
  new: boolean;

  @Column
  popularity: number;

  @Column
  vendor_code: number;
  
  @Column({ defaultValue: 0 })
  in_stock: number;
}
