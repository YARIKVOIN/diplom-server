import { faker } from '@faker-js/faker';
import { Op } from 'sequelize';
import { ApiProperty } from '@nestjs/swagger';

class Order {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Наименование: Iphon 15 pro max Количество: 1' })
  orderlist: string;

  @ApiProperty({ example: '56700' })
  fullprice: number;

  @ApiProperty({ example: 'YARIKVOIN' })
  login: string;

  @ApiProperty({ example: 'isip_ya.yu.andreev@mpt.ru' })
  email: string;

  @ApiProperty({ example: 'Выдан' })
  status: string;
}

export class GetByNameResponse extends Order {
  @ApiProperty({ example: 'Provident incidunt.' })
  login: string;
}

export class GetByNameRequest {
  @ApiProperty({ example: 'Provident incidunt.' })
  login: string;
}

export class AddProductResponse {
  @ApiProperty({ example: 'Наименование: Iphon 15 pro max Количество: 1' })
  readonly orderlist: string;

  @ApiProperty({ example: '56700' })
  readonly fullprice: number;

  @ApiProperty({ example: 'YARIKVOIN' })
  readonly login: string;

  @ApiProperty({ example: 'isip_ya.yu.andreev@mpt.ru' })
  readonly email: string;

  @ApiProperty({ example: 'Выдан' })
  readonly status: string;
}

export class GetAllResponse extends Order {}

export interface IOrderQuery {
  limit: string;
  offset: string;
  order: string | undefined;
  parts: string | undefined;
  priceFrom: string | undefined;
  priceTo: string | undefined;
}
export class PaginateAndFilterResponse {
  @ApiProperty({ type: Order, isArray: true })
  rows: Order;
}
export interface IOrderFilter {
  model: string | undefined;
  memory: string | undefined;
  price: { [Op.between]: number[] };
}

export class SearchByLetterResponse extends Order {
  @ApiProperty({ example: 'Provident incidunt.' })
  name: string;
}

export class SearchResponse extends PaginateAndFilterResponse {
  @ApiProperty({ type: SearchByLetterResponse, isArray: true })
  rows: SearchByLetterResponse;
}

export class SearchRequest {
  @ApiProperty({ example: 'r' })
  search: string;
}
