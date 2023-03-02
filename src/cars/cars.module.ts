import { Module } from '@nestjs/common';
import { CarsController } from '@cars/cars.controller';
import { CarsService } from '@cars/cars.service';

@Module({
  controllers: [CarsController],
  providers: [CarsService],
  exports: [CarsService]
})
export class CarsModule { }
