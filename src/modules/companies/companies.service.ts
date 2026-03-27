import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class CompaniesService {

  constructor(private readonly db: DatabaseService){}

  async create(dto: CreateCompanyDto) {
    const created = await this.db.company.create({ data: dto });
    if(!created)
      throw new BadRequestException('Bad request')
    return created;
  }

  async findAll() {
    const finds = await this.db.company.findMany(); 
    if(!finds)
      throw new NotFoundException('Not found');
    return finds;
  }

  async findOne(id: string) {
    const find = await this.db.company.findUnique({
      where: { id }
    });
    if(!find)
      throw new NotFoundException('Not found');
    return find;
  }

  async update(id: string, dto: UpdateCompanyDto) {
    const updated = await this.db.company.update({
      where: { id },
      data: dto
    });
    if(!updated)
      throw new NotFoundException('Not found');
    return(200);
  }

  async remove(id: string) {
    const removed = await this.db.company.delete({
      where: { id }
    });
    if(!removed)
      throw new NotFoundException('Not found');
    return(204);
  }

}
