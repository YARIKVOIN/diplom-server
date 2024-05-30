import { faker } from '@faker-js/faker';
import { Op } from 'sequelize';
import { ApiProperty } from '@nestjs/swagger';

class BoilerParts {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: "128GB" })
  memory: string;

  @ApiProperty({ example: 12345 })
  price: string;

  @ApiProperty({ example: '[{"Память": "512 гигабайт"}, {"Процессор": "Intel pentium gold"}, {"Дисплей": "128 pixel"}]' })
  atributes: string;

  @ApiProperty({ example: "Lenovo"})
  name: string;

  @ApiProperty({ example: "bububub"})
  description: string;

  @ApiProperty({ example: faker.lorem.sentence() })
  compatibility: string;

  @ApiProperty({ example: faker.lorem.sentence() })
  in_stock: string;

  @ApiProperty({ example: faker.image.city() })
  images: string;

  @ApiProperty({ example: "top seria"})
  model: string;

  @ApiProperty({ example: true })
  bestseller: boolean;

  @ApiProperty({ example: false })
  new: boolean;

  @ApiProperty({ example: 123 })
  popularity: number;

  @ApiProperty({ example: '2023-01-31T19:46:45.000Z' })
  createdAt: string;

  @ApiProperty({ example: '2023-01-31T19:46:45.000Z' })
  updatedAt: string;
}

export class PaginateAndFilterResponse {
  @ApiProperty({ example: 10 })
  count: number;

  @ApiProperty({ type: BoilerParts, isArray: true })
  rows: BoilerParts;
}

export class Bestsellers extends BoilerParts {
  @ApiProperty({ example: true })
  bestseller: boolean;
}

export class GetBestsellersResponse extends PaginateAndFilterResponse {
  @ApiProperty({ example: 10 })
  count: number;

  @ApiProperty({ type: BoilerParts, isArray: true })
  rows: Bestsellers;
}

export class NewParts extends BoilerParts {
  @ApiProperty({ example: true })
  new: boolean;
}

export class GetNewResponse extends PaginateAndFilterResponse {
  @ApiProperty({ example: 10 })
  count: number;

  @ApiProperty({ type: BoilerParts, isArray: true })
  rows: NewParts;
}

export class SearchByLetterResponse extends BoilerParts {
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

export class GetByNameResponse extends BoilerParts {
  @ApiProperty({ example: 'Provident incidunt.' })
  name: string;
}

export class GetByNameRequest {
  @ApiProperty({ example: 'Provident incidunt.' })
  name: string;
}

export class AddProductResponse {
  @ApiProperty({ example: 'Iphon 15 pro max bububub' })
  readonly name: string;

  @ApiProperty({ example: 12345 })
  readonly price: number;

  @ApiProperty({ example: 'Очень классный телефон с невообразимым процессором' })
  readonly description: string;

  @ApiProperty({ example: '128 GB' })
  readonly memory: string;

  @ApiProperty({ example: '[{"Память": "512 гигабайт"}, {"Процессор": "Intel pentium gold"}, {"Дисплей": "128 pixel"}]' })
  readonly atributes: string;

  @ApiProperty({ example: '["https://sun9-17.userapi.com/impg/9vBFMx0RHTJ0hXCE5xon2sM4w6SXDuhsDGWfBQ/8ZYFbT8kg3E.jpg?size=1280x720&quality=95&sign=7d191123bcb3db56d1d608d6a3a1168e&c_uniq_tag=07SHq9h67gJ1fjFuKBiiPcZpZbdxb5MK8Bp1rRQSNEI&type=album", "https://resizer.mail.ru/p/e77c6cfe-7516-5d03-8b6f-631e9c583367/AQAKF4BK6-RKRkmdClhSx2pwVF78qDA_dpOBrsZf-qImMawlSjzBbJRAjnCTJ8mYJ-z4D_RZH-OxdZVOjHjw76r8SdM.jpg", "https://cdn.mos.cms.futurecdn.net/Pyma6LSPSGupqqWVwLYuJg.jpg"]' })
  readonly images: string;

  @ApiProperty({ example: 'iphone 15 pro' })
  readonly model: string;

  @ApiProperty({ example: true })
  readonly bestseller: boolean;

  @ApiProperty({ example: true })
  readonly new: boolean;

  @ApiProperty({ example: 123 })
  readonly popularity: number;

  @ApiProperty({ example: 12 })
  readonly in_stock: number;

  @ApiProperty({ example: 123456 })
  readonly vendor_code: number;
}

export class FindOneResponse extends BoilerParts {}

export interface IBoilerPartsQuery {
  limit: string;
  offset: string;
  boiler: string | undefined;
  parts: string | undefined;
  priceFrom: string | undefined;
  priceTo: string | undefined;
}

export interface IBoilerPartsFilter {
  model: string | undefined;
  memory: string | undefined;
  price: { [Op.between]: number[] };
}
