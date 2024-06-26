import { Controller, Post, Put, Delete, Body, Patch, HttpCode, Header, HttpStatus } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { Param, Query, UseGuards } from '@nestjs/common';
import { BoilerPartsService } from './boiler-parts.service';
import { AuthenticatedGuard } from '../auth/authenticated.guard';
import { CreateProductDto } from './dto/create-product.dto';
import { ApiOkResponse, ApiBody } from '@nestjs/swagger';
import {
  PaginateAndFilterResponse,
  FindOneResponse,
  GetBestsellersResponse,
  GetNewResponse,
  SearchResponse,
  SearchRequest,
  GetByNameResponse,
  GetByNameRequest,
  AddProductResponse,
} from './types';
import { BoilerParts } from './boiler-parts.model';

@Controller('boiler-parts')
export class BoilerPartsController {
  constructor(private readonly boilerPartsService: BoilerPartsService) {}

  @ApiOkResponse({ type: PaginateAndFilterResponse })
  @UseGuards(AuthenticatedGuard)
  @Get()
  paginateAndFilter(@Query() query) {
    return this.boilerPartsService.paginateAndFilter(query);
  }

  @ApiOkResponse({ type: FindOneResponse })
  @UseGuards(AuthenticatedGuard)
  @Get('find/:id')
  getOne(@Param('id') id: string) {
    return this.boilerPartsService.findOne(id);
  }

  @ApiOkResponse({ type: GetBestsellersResponse })
  @UseGuards(AuthenticatedGuard)
  @Get('bestsellers')
  getBestseller() {
    return this.boilerPartsService.bestsellers();
  }

  @ApiOkResponse({ type: GetNewResponse })
  @UseGuards(AuthenticatedGuard)
  @Get('new')
  getNew() {
    return this.boilerPartsService.new();
  }

  @ApiOkResponse({ type: SearchResponse })
  @ApiBody({ type: SearchRequest })
  @UseGuards(AuthenticatedGuard)
  @Post('search')
  search(@Body() { search }: { search: string }) {
    return this.boilerPartsService.searchByString(search);
  }

  @ApiOkResponse({ type: GetByNameResponse })
  @ApiBody({ type: GetByNameRequest })
  @UseGuards(AuthenticatedGuard)
  @Post('name')
  getByName(@Body() { name }: { name: string }) {
    return this.boilerPartsService.findOneByName(name);
  }
  @ApiOkResponse({ type: AddProductResponse })
  @HttpCode(HttpStatus.CREATED)
  @Header('Content-type', 'application/json')
  @Post('Add')
  create(@Body() createProductDto: CreateProductDto){
    return this.boilerPartsService.create(createProductDto);
  }
  @Patch(':id') 
  update(@Param('id') id: string, @Body() createProductDto: CreateProductDto){
    return this.boilerPartsService.update(Number(id), createProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<number> {
    return this.boilerPartsService.remove(Number(id));
  }

  @ApiOkResponse({ type: PaginateAndFilterResponse })
  @Get('All')
  findAll(@Query() query) {
    return this.boilerPartsService.findAll();
  }
}
