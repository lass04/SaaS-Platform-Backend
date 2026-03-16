import { DatabaseService } from './../database/database.service';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { CreateCompanyDto } from './dto/create-company.dto';
import { Injectable } from '@nestjs/common';


@Injectable()
export class CompaniesService {
  constructor(private readonly db: DatabaseService){}

  async findAll() {
    return await this.db.company.findMany();
    //Return All Companies
  }

  async findOne(id: string) {
    return await this.db.company.findUnique({ 
      where : { id }
     });
    //Return One Company By Id
  }
  async create(company: CreateCompanyDto) {
    return await this.db.company.create({ data: company });
    //Return the new created Company
  }
  async update(id: string, company: UpdateCompanyDto) {
    return await this.db.company.update({
      where: { id },
      data: company
    });
    //Return the updated Company
  }
  async remove(id: string) {
    return await this.db.company.delete({
      where : { id }
    });
    //Delete Company
  }
}
