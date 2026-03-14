import { UpdateCompanyDto } from '../dto/update-company.dto';
import { CreateCompanyDto } from './../dto/create-company.dto';
import { CompaniesService } from './companies.service';
import {
  Controller,
  Param,
  Body,
  Query,
  Get,
  Post,
  Delete,
  HttpCode,
  Patch,
  ParseIntPipe,
} from '@nestjs/common';

@Controller('companies')
export class CompaniesController {
  constructor(private companySVC: CompaniesService) {}

  @Get()
  findAll() {
    return this.companySVC.find();
  }

  @Get()
  findAllWithQuery(
    @Query('page', ParseIntPipe) page: number,
    @Query('limit', ParseIntPipe) limit: number,
  ) {
    return `${page} ${limit}`;
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.companySVC.findOne(id);
  }

  @Post()
  @HttpCode(201)
  create(@Body() createCompany: CreateCompanyDto) {
    return this.companySVC.create(createCompany);
  }

  @Patch(':id')
  @HttpCode(200)
  update(
    @Body() updateCompany: UpdateCompanyDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.companySVC.update(id, updateCompany);
  }

  @Delete(':id')
  @HttpCode(204)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.companySVC.delete(id);
  }
}
