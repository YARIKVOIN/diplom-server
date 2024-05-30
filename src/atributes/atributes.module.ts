import { Module } from '@nestjs/common';
import { AtributesController } from './atributes.controller';
import { AtributesService } from './atributes.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Atributes } from './atributes.model';

@Module({
  imports: [SequelizeModule.forFeature([Atributes])],
  controllers: [AtributesController],
  providers: [AtributesService],
  exports: [AtributesService],
})
export class AtributesModule {}
