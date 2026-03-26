import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, BadRequestException } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Roles } from 'src/common/decorators/role.decorator';
import { UpdateCategoryDto } from './dto/update-category.dto';


@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  
    @Post()
    async create(@Body() dto: CreateCategoryDto) {
      const created = await this.categoriesService.create(dto);
      if(!created)
        throw new BadRequestException('Bad request');
      return created;
    }
  
    @Roles('ADMIN')
    @Get()
    async findAll() {
      const finds = await this.categoriesService.findAll();
      if(!finds)
        throw new NotFoundException('No categories found');
      return finds;
    }
  
    @Get(':id')
    async findOne(@Param('id') id: string) {
      const find = await this.categoriesService.findOne(id);
      if(!find)
        throw new NotFoundException('Category not found');
      return find;
    }
  
    @Roles('ADMIN')
    @Patch(':id')
    async update(@Param('id') id: string, @Body() dto: UpdateCategoryDto) {
      const updated = await this.categoriesService.update(id, dto);
      if(!updated)
        throw new NotFoundException('Category not found');
      return updated;
    }
  
    @Roles('ADMIN')
    @Delete(':id')
    async remove(@Param('id') id: string) {
      const removed = await this.categoriesService.remove(id);
      if(!removed)
        throw new NotFoundException('Category not found');
    }
}


