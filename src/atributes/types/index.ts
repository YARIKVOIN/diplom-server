import { faker } from '@faker-js/faker';
import { Op } from 'sequelize';
import { ApiProperty } from '@nestjs/swagger';

class Atributes {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'память' })
  atributes: string;

}


export class AddProductResponse {
  @ApiProperty({ example: 'память' })
  readonly category: string;

}
export class GetAllResponse extends Atributes {}

export interface IOrderQuery {
  limit: string;
  offset: string;
  order: string | undefined;
  parts: string | undefined;
  priceFrom: string | undefined;
  priceTo: string | undefined;
}
export class PaginateAndFilterResponse {
  @ApiProperty({ type: Atributes, isArray: true })
  rows: Atributes;
}
export interface IOrderFilter {
  model: string | undefined;
  memory: string | undefined;
  price: { [Op.between]: number[] };
}

export class SearchByLetterResponse extends Atributes {
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
