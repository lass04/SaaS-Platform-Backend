import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class ProductsService {
  constructor(private readonly db: DatabaseService){}

    async create(dto: CreateProductDto) {
      const created = await this.db.product.create({ data: dto });
      if(!created)
        throw new BadRequestException('Bad request')
      return created;
    }
  
    async findAll() {
      const finds = await this.db.product.findMany(); 
      if(!finds)
        throw new NotFoundException('Not found');
      return finds;
    }
  
    async findOne(id: string) {
      const find = await this.db.product.findUnique({
        where: { id }
      });
      if(!find)
        throw new NotFoundException('Not found');
      return find;
    }
  
    async update(id: string, dto: UpdateProductDto) {
      const updated = await this.db.product.update({
        where: { id },
        data: dto
      });
      if(!updated)
        throw new NotFoundException('Not found');
      return(200);
    }
  
    async remove(id: string) {
      const removed = await this.db.product.delete({
        where: { id }
      });
      if(!removed)
        throw new NotFoundException('Not found');
      return(204);
    }
}
