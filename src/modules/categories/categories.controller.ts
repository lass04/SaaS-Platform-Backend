import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, NotFoundException } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Roles } from 'src/common/decorators/role.decorator';


@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Roles('ADMIN')
  @Post()
   create(@Body() createCategoryDto: CreateCategoryDto) {
     return this.categoriesService.create(createCategoryDto);
   }
 
   @Get()
   findAll() {
     return this.categoriesService.findAll();
   }
 
   @Get(':id')
   findOne(@Param('id') id: string) {
     return this.categoriesService.findOne(id);
   }
 
   @Roles('ADMIN')
   @Patch(':id')
   update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
     return this.categoriesService.update(id, updateCategoryDto);
   }
 
   @Roles('ADMIN')
   @Delete(':id')
   remove(@Param('id') id: string) {
     return this.categoriesService.remove(id);
   }
}


