import { UpdateCompanyDto } from './../dto/update-company.dto';
import { CreateCompanyDto } from './../dto/create-company.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CompaniesService {
  find(): CreateCompanyDto {
    return new CreateCompanyDto();
    //Return All Companies
  }
  findOne(id: number) {
    return { id };
    //Return One Company By Id
  }
  create(company: CreateCompanyDto) {
    return { company };
    //Return the new created Company
  }
  update(id: number, company: UpdateCompanyDto) {
    return { id, company };
    //Return the updated Company
  }
  delete(id: number) {
    return { id };
    //Delete Company
  }
}
