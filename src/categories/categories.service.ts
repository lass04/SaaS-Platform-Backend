import { DatabaseService } from './../database/database.service';
import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  
  constructor(private readonly db: DatabaseService){}

  async create(createCategoryDto: CreateCategoryDto) {
    const created = await this.db.category.create({ data: createCategoryDto });
    if(!created)
      throw new BadRequestException('Could not create category');
    return created;
  }

  async findAll() {
    const finds = await this.db.category.findMany();
    if(!finds)
      throw new NotFoundException('category not found')
    return finds;
  }

  async findOne(id: string) {
    const find = await this.db.category.findUnique({ where : { id } });
    if(!find)
      throw new NotFoundException('category not found');
    return find;
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const updated = await this.db.category.update({
       where : { id },
       data: updateCategoryDto});
    if(!updated)
      throw new NotFoundException('category not found');
    return updated;
  }

  async remove(id: string) {
    const deleted = await this.db.category.delete({
      where : { id }
    });
    if(!deleted)
      throw new NotFoundException('category not found');
    return 'Successfully deleted'
  }
}
