import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, NotFoundException } from '@nestjs/common';
import { SaleItemsService } from './sale-items.service';
import { CreateSaleItemDto } from './dto/create-sale-item.dto';
import { UpdateSaleItemDto } from './dto/update-sale-item.dto';
import { Roles } from 'src/common/decorators/role.decorator';

@Controller('sale-items')
export class SaleItemsController {
  constructor(private readonly saleItemsService: SaleItemsService) {}

  @Roles('ADMIN')
  @Post()
   create(@Body() createSaleItemDto: CreateSaleItemDto) {
     return this.saleItemsService.create(createSaleItemDto);
   }
 
   @Get()
   findAll() {
     return this.saleItemsService.findAll();
   }
 
   @Get(':id')
   findOne(@Param('id') id: string) {
     return this.saleItemsService.findOne(id);
   }
 
   @Roles('ADMIN')
   @Patch(':id')
   update(@Param('id') id: string, @Body() updateSaleItemDto: UpdateSaleItemDto) {
     return this.saleItemsService.update(id, updateSaleItemDto);
   }
 
   @Roles('ADMIN')
   @Delete(':id')
   remove(@Param('id') id: string) {
     return this.saleItemsService.remove(id);
   }
}