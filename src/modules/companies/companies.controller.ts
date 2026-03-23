import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, NotFoundException } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Post()
  async create(@Body() dto: CreateCompanyDto) {
    const created = await this.companiesService.create(dto);
    if(!created)
      throw new BadRequestException('Bad request');
    return created;
  }

  @Get()
  async findAll() {
    const finds = await this.companiesService.findAll();
    if(!finds)
      throw new NotFoundException('No companies found');
    return finds;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const find = await this.companiesService.findOne(id);
    if(!find)
      throw new NotFoundException('Company not found');
    return find;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateCompanyDto) {
    const updated = await this.companiesService.update(id, dto);
    if(!updated)
      throw new NotFoundException('company not found');
    return updated;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const removed = await this.companiesService.remove(id);
    if(!removed)
      throw new NotFoundException('Company not found');
  }

}
