import { RoleGuard } from './../guards/role-guard';
import { Roles } from './../common/decorators/roles-decorator';
import { AuthGuard } from './../guards/auth.guard';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { CreateCompanyDto } from './dto/create-company.dto';
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
  NotFoundException,
  BadRequestException,
  UseGuards,
} from '@nestjs/common';

@UseGuards(AuthGuard,RoleGuard)
@Controller('companies')
export class CompaniesController {

  constructor(private companyService: CompaniesService) {}

  @Roles('admin')
  @Get()
  @HttpCode(200)
  findAll() {
    const companies = this.companyService.findAll();
    if(!companies)
      throw new NotFoundException('No companies found');
    return companies;
  }


  @Get(':id')
  @HttpCode(200)
  findOne(@Param('id') id: string) {
    const company = this.companyService.findOne(id);
    if(!company)
      throw new NotFoundException('Company Not Found');
    return company;
  }


  @Post()
  @HttpCode(201)
  create(@Body() createCompany: CreateCompanyDto) {
    const create = this.companyService.create(createCompany);
    if(!create)
      throw new BadRequestException('Could not create company');
    return create;
  }

  @Patch(':id')
  @HttpCode(200)
  update(@Body() updateCompany: UpdateCompanyDto, @Param('id') id: string) {
    const update = this.companyService.update(id, updateCompany);
    if(!update)
      throw new NotFoundException('Company not found');
    return update;
  }

  @Delete(':id')
  @HttpCode(204)
  delete(@Param('id') id: string) {
    const deleted = this.companyService.remove(id);
    if(!deleted)
      throw new NotFoundException('Company not found');
    return deleted;
  }
}
