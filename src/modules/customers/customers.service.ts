import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class CustomersService {
  
    constructor(private readonly db: DatabaseService){}
  
    async create(dto: CreateCustomerDto) {
      const created = await this.db.customer.create({ data: dto });
      if(!created)
        throw new BadRequestException('Bad request')
      return created;
    }
  
    async findAll() {
      const finds = await this.db.customer.findMany(); 
      if(!finds)
        throw new NotFoundException('Not found');
      return finds;
    }
  
    async findOne(id: string) {
      const find = await this.db.customer.findUnique({
        where: { id }
      });
      if(!find)
        throw new NotFoundException('Not found');
      return find;
    }
  
    async update(id: string, dto: UpdateCustomerDto) {
      const updated = await this.db.customer.update({
        where: { id },
        data: dto
      });
      if(!updated)
        throw new NotFoundException('Not found');
      return(200);
    }
  
    async remove(id: string) {
      const removed = await this.db.customer.delete({
        where: { id }
      });
      if(!removed)
        throw new NotFoundException('Not found');
      return(204);
    }
}
