import { Controller, Get, Header, Post } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    @Get()
    @Header('Content-Type', 'application/json')
    getProducts(): string{
        return 'Products Controller'
    }
    @Post()
    addProducts(){

    }
}
