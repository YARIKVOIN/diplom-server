import { Controller, Post, Put, Delete, Body, Patch, HttpCode, Header, HttpStatus } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { Param, Query, UseGuards } from '@nestjs/common';
import { ProizvoditelService } from './proizvoditel.service';
import { AuthenticatedGuard } from '../auth/authenticated.guard';
import { ApiOkResponse, ApiBody } from '@nestjs/swagger';
import {
  AddProductResponse,
  PaginateAndFilterResponse,
  SearchResponse,
  SearchRequest,
} from './types';
import { CreateOrderDto } from './dto/create-order.dto';
@Controller('proizvoditel')
export class ProizvoditelController {
  constructor(private readonly proizvoditelService: ProizvoditelService) {}

  @ApiOkResponse({ type: PaginateAndFilterResponse })
  @Get()
  findAll(@Query() query) {
    return this.proizvoditelService.findAll();
  }

  @ApiOkResponse({ type: AddProductResponse })
  @HttpCode(HttpStatus.CREATED)
  @Header('Content-type', 'application/json')
  @Post('Add')
  @UseGuards(AuthenticatedGuard)
  create(@Body() createProductDto: CreateOrderDto){
    return this.proizvoditelService.create(createProductDto);
  }
  @Patch(':id') 
  @UseGuards(AuthenticatedGuard)
  update(@Param('id') id: string, @Body() createProductDto: CreateOrderDto){
    return this.proizvoditelService.update(Number(id), createProductDto);
  }

  @Delete(':id')
  @UseGuards(AuthenticatedGuard)
  remove(@Param('id') id: string): Promise<number> {
    return this.proizvoditelService.remove(Number(id));
  }

  @ApiOkResponse({ type: SearchResponse })
  @ApiBody({ type: SearchRequest })
  @UseGuards(AuthenticatedGuard)
  @Post(':id')
  getbyid(@Body() { id }: { id: number }) {
    return this.proizvoditelService.getbyid(id);
  }
}