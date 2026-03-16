import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, NotFoundException } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  create(@Body() categpry: CreateCategoryDto) {
    const created = this.categoriesService.create(categpry);
    if(!created)
      throw new BadRequestException('could not create category');
    return created;
  }

  @Get()
  findAll() {
    const finds = this.categoriesService.findAll();
    if(!finds)
      throw new NotFoundException('Category not found');
    return finds;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const find = this.categoriesService.findOne(id);
    if(!find)
      throw new NotFoundException('category not found');
    return find;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    const updated = this.categoriesService.update(id, updateCategoryDto);
    if(!updated)
      throw new NotFoundException('category not found');
    return updated;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const deleted = this.categoriesService.remove(id);
    if(!deleted)
      throw new NotFoundException('category not found');
    return 'Successfully deleted';
  }
}
