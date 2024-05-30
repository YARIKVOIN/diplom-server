import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateOrderDto {

  @ApiProperty({ example: 'память' })
  readonly category: string;

}
