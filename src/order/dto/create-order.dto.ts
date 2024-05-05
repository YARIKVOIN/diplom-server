import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateOrderDto {

  @ApiProperty({ example: 'Наименование: Iphon 15 pro max Количество: 1' })
  @IsNotEmpty()
  readonly orderlist: string;

  @ApiProperty({ example: '56700' })
  @IsNotEmpty()
  readonly fullprice: number;

  @ApiProperty({ example: 'YARIKVOIN' })
  @IsNotEmpty()
  readonly login: string;

  @ApiProperty({ example: 'isip_ya.yu.andreev@mpt.ru' })
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({ example: 'Выдан' })
  @IsNotEmpty()
  readonly status: string;
}
