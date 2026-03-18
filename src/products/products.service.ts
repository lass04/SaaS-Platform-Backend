import { DatabaseService } from './../database/database.service';
import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {

  constructor(private readonly db: DatabaseService){}

  async create(product: CreateProductDto) {
    return await this.db.product.create({ data: product });
  }

  async findAll() {
    return await this.db.product.findMany();
  }

  async findOne(id: string) {
    return await this.db.product.findUnique({
      where : { id }
    });
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    return await this.db.product.update({
      where: { id },
      data: updateProductDto
    });
  }

  async remove(id: string) {
    return await this.db.product.delete({
      where: { id }
    });
  }
}
