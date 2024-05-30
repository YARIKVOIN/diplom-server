import { Controller, Post, Put, Delete, Body, Patch, HttpCode, Header, HttpStatus } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { Param, Query, UseGuards } from '@nestjs/common';
import { OrderService } from './order.service';
import { AuthenticatedGuard } from '../auth/authenticated.guard';
import { ApiOkResponse, ApiBody } from '@nestjs/swagger';
import {
  GetByNameResponse,
  GetByNameRequest,
  AddProductResponse,
  GetAllResponse,
  PaginateAndFilterResponse,
  SearchResponse,
  SearchRequest,
} from './types';
import { CreateOrderDto } from './dto/create-order.dto';
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @ApiOkResponse({ type: PaginateAndFilterResponse })
  @Get()
  findAll(@Query() query) {
    return this.orderService.findAll();
  }
  @ApiOkResponse({ type: GetByNameResponse })
  @ApiBody({ type: GetByNameRequest })
  @Post('login')
  @UseGuards(AuthenticatedGuard)
  getByName(@Body() { login }: { login: string }) {
    return this.orderService.findOneByName(login);
  }

  @ApiOkResponse({ type: GetByNameResponse })
  @ApiBody({ type: GetByNameRequest })
  @Post('login/status')
  getByNameStatus(@Body() { login, status }: { login: string, status: string }) {
    return this.orderService.findOneByNameStatus(login, status);
  }

  @ApiOkResponse({ type: AddProductResponse })
  @HttpCode(HttpStatus.CREATED)
  @Header('Content-type', 'application/json')
  @Post('Add')
  @UseGuards(AuthenticatedGuard)
  create(@Body() createProductDto: CreateOrderDto){
    return this.orderService.create(createProductDto);
  }
  @Patch(':id') 
  @UseGuards(AuthenticatedGuard)
  update(@Param('id') id: string, @Body() createProductDto: CreateOrderDto){
    return this.orderService.update(Number(id), createProductDto);
  }

  @Delete(':id')
  @UseGuards(AuthenticatedGuard)
  remove(@Param('id') id: string): Promise<number> {
    return this.orderService.remove(Number(id));
  }

  @ApiOkResponse({ type: SearchResponse })
  @ApiBody({ type: SearchRequest })
  @UseGuards(AuthenticatedGuard)
  @Post('search')
  search(@Body() { search }: { search: string }) {
    return this.orderService.searchByString(search);
  }

  @ApiOkResponse({ type: SearchResponse })
  @ApiBody({ type: SearchRequest })
  @UseGuards(AuthenticatedGuard)
  @Post(':id')
  getbyid(@Body() { id }: { id: number }) {
    return this.orderService.getbyid(id);
  }
}