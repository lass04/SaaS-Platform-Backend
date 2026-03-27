import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, NotFoundException } from '@nestjs/common';
import { SalesService } from './sales.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { Roles } from 'src/common/decorators/role.decorator';

@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Roles('ADMIN')
  @Post()
   create(@Body() createSaleDto: CreateSaleDto) {
     return this.salesService.create(createSaleDto);
   }
 
   @Get()
   findAll() {
     return this.salesService.findAll();
   }
 
   @Get(':id')
   findOne(@Param('id') id: string) {
     return this.salesService.findOne(id);
   }
 
   @Roles('ADMIN')
   @Patch(':id')
   update(@Param('id') id: string, @Body() updateSaleDto: UpdateSaleDto) {
     return this.salesService.update(id, updateSaleDto);
   }
 
   @Roles('ADMIN')
   @Delete(':id')
   remove(@Param('id') id: string) {
     return this.salesService.remove(id);
   }
}