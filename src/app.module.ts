import { Module } from '@nestjs/common';
import { CarsModule } from '@cars/cars.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [CarsModule, ConfigModule.forRoot({
    envFilePath : ['.env'],
    isGlobal : true
  })],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
