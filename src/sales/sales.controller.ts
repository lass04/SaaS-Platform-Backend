import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, NotFoundException } from '@nestjs/common';
import { SalesService } from './sales.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';

@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Post()
    create(@Body() createProductDto: CreateSaleDto) {
      const created = this.salesService.create(createProductDto);
      if(!created)
        throw new BadRequestException('could not create sale');
      return created;
    }
  
    @Get()
    findAll() {
      const finds = this.salesService.findAll();
      if(!finds)
        throw new NotFoundException('No sales found');
      return finds;
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      const find = this.salesService.findOne(id);
      if(!find)
        throw new NotFoundException('sale not found');
      return find;
    }
  
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateProductDto: UpdateSaleDto) {
      const updated = this.salesService.update(id, updateProductDto);
      if(!updated)
        throw new NotFoundException('sale not found');
      return updated;
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      const deleted = this.salesService.remove(id);
      if(!deleted)
        throw new NotFoundException('sale not found');
      return deleted;
    }
}
