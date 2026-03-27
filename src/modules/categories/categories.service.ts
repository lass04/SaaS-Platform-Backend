import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class CategoriesService {
  
    constructor(private readonly db: DatabaseService){}
  
    async create(dto: CreateCategoryDto) {
      const created = await this.db.category.create({ data: dto });
      if(!created)
        throw new BadRequestException('Bad request')
      return created;
    }
  
    async findAll() {
      const finds = await this.db.category.findMany(); 
      if(!finds)
        throw new NotFoundException('Not found');
      return finds;
    }
  
    async findOne(id: string) {
      const find = await this.db.category.findUnique({
        where: { id }
      });
      if(!find)
        throw new NotFoundException('Not found');
      return find;
    }
  
    async update(id: string, dto: UpdateCategoryDto) {
      const updated = await this.db.category.update({
        where: { id },
        data: dto
      });
      if(!updated)
        throw new NotFoundException('Not found');
      return(200);
    }
  
    async remove(id: string) {
      const removed = await this.db.category.delete({
        where: { id }
      });
      if(!removed)
        throw new NotFoundException('Not found');
      return(204);
    }
}
