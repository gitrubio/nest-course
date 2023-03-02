import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from '@brands/dto/create-brand.dto';
import { UpdateBrandDto } from '@brands/dto/update-brand.dto';
import { Brand } from '@brands/entities/brand.entity';
import { v4 as uuid } from 'uuid';
import { brand } from '@brands/interfaces/brands.interfaces';

@Injectable()
export class BrandsService {
  brands: brand [] = [
    {
      id: uuid(),
      name: 'volvo',
      createdAt: new Date().getTime(),
    },
  ];
  create(createBrandDto: CreateBrandDto) {
    const brand: brand = {
      id: uuid(),
      name: createBrandDto.name,
      createdAt: new Date().getTime(),
    };
    this.brands.push(brand);
    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((brand) => brand.id === id);
    if (!brand) throw new NotFoundException(`not found brand with id = [ ${id} ]`);
    return brand
  }

  update(id: number, updateBrandDto: UpdateBrandDto) {
    return `This action updates a #${id} brand`;
  }

  remove(id: number) {
    return `This action removes a #${id} brand`;
  }

  fillBrandsWithSeedData( cars : brand[]){
    this.brands = cars
  }

}
