import { Module } from '@nestjs/common';
import { CarsModule } from '@cars/cars.module';
import { ConfigModule } from '@nestjs/config';
import { BrandsModule } from './brands/brands.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [CarsModule, BrandsModule, ConfigModule.forRoot({
    envFilePath : ['.env'],
    isGlobal : true
  }), SeedModule], 
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
