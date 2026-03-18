import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, BadRequestException } from '@nestjs/common';
import { SaleItemsService } from './sale-items.service';
import { CreateSaleItemDto } from './dto/create-sale-item.dto';
import { UpdateSaleItemDto } from './dto/update-sale-item.dto';

@Controller('sale-items')
export class SaleItemsController {
  constructor(private readonly saleItemsService: SaleItemsService) {}

 @Post()
   create(@Body() createSaleItemsDto: CreateSaleItemDto) {
     const created = this.saleItemsService.create(createSaleItemsDto);
     if(!created)
       throw new BadRequestException('could not create saleItems');
     return created;
   }
 
   @Get()
   findAll() {
     const finds = this.saleItemsService.findAll();
     if(!finds)
       throw new NotFoundException('No saleItems found');
     return finds;
   }
 
   @Get(':id')
   findOne(@Param('id') id: string) {
     const find = this.saleItemsService.findOne(id);
     if(!find)
       throw new NotFoundException('saleItems not found');
     return find;
   }
 
   @Patch(':id')
   update(@Param('id') id: string, @Body() updateSaleItemDto: UpdateSaleItemDto) {
     const updated = this.saleItemsService.update(id, updateSaleItemDto);
     if(!updated)
       throw new NotFoundException('saleItems not found');
     return updated;
   }
 
   @Delete(':id')
   remove(@Param('id') id: string) {
     const deleted = this.saleItemsService.remove(id);
     if(!deleted)
       throw new NotFoundException('saleItems not found');
     return deleted;
   }
}
