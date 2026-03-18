import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, NotFoundException } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    const created = this.productsService.create(createProductDto);
    if(!created)
      throw new BadRequestException('could not create product');
    return created;
  }

  @Get()
  findAll() {
    const finds = this.productsService.findAll();
    if(!finds)
      throw new NotFoundException('No products found');
    return finds;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const find = this.productsService.findOne(id);
    if(!find)
      throw new NotFoundException('product not found');
    return find;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    const updated = this.productsService.update(id, updateProductDto);
    if(!updated)
      throw new NotFoundException('Product not found');
    return updated;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const deleted = this.productsService.remove(id);
    if(!deleted)
      throw new NotFoundException('product not found');
    return deleted;
  }
}
