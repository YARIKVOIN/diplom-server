import { faker } from '@faker-js/faker';
import { Op } from 'sequelize';
import { ApiProperty } from '@nestjs/swagger';

class Category {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Гаджет' })
  category: string;
}


export class AddProductResponse {
  @ApiProperty({ example: 'Гаджет' })
  readonly category: string;
}
export class GetAllResponse extends Category {}

export interface IOrderQuery {
  limit: string;
  offset: string;
  order: string | undefined;
  parts: string | undefined;
  priceFrom: string | undefined;
  priceTo: string | undefined;
}
export class PaginateAndFilterResponse {
  @ApiProperty({ type: Category, isArray: true })
  rows: Category;
}
export interface IOrderFilter {
  model: string | undefined;
  memory: string | undefined;
  price: { [Op.between]: number[] };
}

export class SearchByLetterResponse extends Category {
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
