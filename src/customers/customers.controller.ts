import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, NotFoundException } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Controller('customers')
export class CustomersController {

  constructor(private readonly customersService: CustomersService) {}

  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    const created = this.customersService.create(createCustomerDto);
    if(!created)
      throw new BadRequestException('could not create customer');
    return created;
  }

  @Get()
  findAll() {
    const finds = this.customersService.findAll();
    if(!finds)
      throw new NotFoundException('No customers found')
    return finds;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const find = this.customersService.findOne(id);
    if(!find)
      throw new NotFoundException('Customer not found')
    return find;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
    const updated = this.customersService.update(id, updateCustomerDto);
    if(!updated)
      throw new NotFoundException('customer not found');
    return updated;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const deleted = this.customersService.remove(id);
    if(!deleted)
      throw new NotFoundException('customer not found');
    return deleted;
  }

}
