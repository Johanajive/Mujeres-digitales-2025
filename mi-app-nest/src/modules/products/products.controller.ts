import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
@Controller('products')
export class ProductsController {
    constructor(private readonly ProductsService: ProductsService) {}
        @Get()
        findAll() {
            return this.ProductsService.findAll();
        }

        @Get(':id')
        findOne(@Param('id') id: string) {
            return this.ProductsService.findOne(Number(id))
        }
    
    
}
