import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: 'Iphon 15 pro max bububub' })
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({ example: 12345 })
  @IsNotEmpty()
  readonly price: number;

  @ApiProperty({ example: 'Очень классный телефон с невообразимым процессором' })
  @IsNotEmpty()
  readonly description: string;

  @ApiProperty({ example: '128 GB' })
  @IsNotEmpty()
  readonly memory: string;

  @ApiProperty({ example: 'intel pentium gold' })
  @IsNotEmpty()
  readonly proccesor: string;

  @ApiProperty({ example: '128 pixel' })
  @IsNotEmpty()
  readonly display: string;

  @ApiProperty({ example: '["https://sun9-17.userapi.com/impg/9vBFMx0RHTJ0hXCE5xon2sM4w6SXDuhsDGWfBQ/8ZYFbT8kg3E.jpg?size=1280x720&quality=95&sign=7d191123bcb3db56d1d608d6a3a1168e&c_uniq_tag=07SHq9h67gJ1fjFuKBiiPcZpZbdxb5MK8Bp1rRQSNEI&type=album", "https://resizer.mail.ru/p/e77c6cfe-7516-5d03-8b6f-631e9c583367/AQAKF4BK6-RKRkmdClhSx2pwVF78qDA_dpOBrsZf-qImMawlSjzBbJRAjnCTJ8mYJ-z4D_RZH-OxdZVOjHjw76r8SdM.jpg", "https://cdn.mos.cms.futurecdn.net/Pyma6LSPSGupqqWVwLYuJg.jpg"]' })
  @IsNotEmpty()
  readonly images: string;

  @ApiProperty({ example: 'iphone 15 pro' })
  @IsNotEmpty()
  readonly model: string;

  @ApiProperty({ example: true })
  @IsNotEmpty()
  readonly bestseller: boolean;

  @ApiProperty({ example: true })
  @IsNotEmpty()
  readonly new: boolean;

  @ApiProperty({ example: 123 })
  @IsNotEmpty()
  readonly popularity: number;

  @ApiProperty({ example: 'canon' })
  @IsNotEmpty()
  readonly camera: string;

  @ApiProperty({ example: 12 })
  @IsNotEmpty()
  readonly in_stock: number;

  @ApiProperty({ example: 123456 })
  @IsNotEmpty()
  readonly vendor_code: number;
}
