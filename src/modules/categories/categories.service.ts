import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class CategoriesService {
  
    constructor(private readonly db: DatabaseService){}
  
    async create(dto: CreateCategoryDto) {
      return await this.db.category.create({ data: dto });
    }
  
    async findAll() {
      return await this.db.category.findMany(); 
    }
  
    async findOne(id: string) {
      return await this.db.category.findUnique({
        where: { id }
      });
    }
  
    async update(id: string, dto: UpdateCategoryDto) {
      return await this.db.category.update({
        where: { id },
        data: dto
      });
    }
  
    async remove(id: string) {
      return await this.db.category.delete({
        where: { id }
      });
    }
}
