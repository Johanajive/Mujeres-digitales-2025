import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import { IProduct } from 'src/interfaces/IProducts'; 
import { CreateProductDTO } from 'src/dto/create-products.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(Number(id));
  }

  @Post()
  create(@Body() body: CreateProductDTO) {
    return this.productsService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: CreateProductDTO) {
    return this.productsService.update(Number(id), body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(Number(id));
  }
}
