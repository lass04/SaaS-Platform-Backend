import { DatabaseService } from './../database/database.service';
import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompaniesService {

  constructor(private readonly db: DatabaseService){}

  async create(dto: CreateCompanyDto) {
    return await this.db.company.create({ data: dto });
  }

  async findAll() {
    return await this.db.company.findMany(); 
  }

  async findOne(id: string) {
    return await this.db.company.findUnique({
      where: { id }
    });
  }

  async update(id: string, dto: UpdateCompanyDto) {
    return await this.db.company.update({
      where: { id },
      data: dto
    });
  }

  async remove(id: string) {
    return await this.db.company.delete({
      where: { id }
    });
  }

}
