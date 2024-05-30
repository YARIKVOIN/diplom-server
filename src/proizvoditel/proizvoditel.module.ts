import { Module } from '@nestjs/common';
import { ProizvoditelController } from './proizvoditel.controller';
import { ProizvoditelService } from './proizvoditel.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Proizvoditel } from './proizvoditel.model';

@Module({
  imports: [SequelizeModule.forFeature([Proizvoditel])],
  controllers: [ProizvoditelController],
  providers: [ProizvoditelService],
  exports: [ProizvoditelService],
})
export class ProizvoditelModule {}
