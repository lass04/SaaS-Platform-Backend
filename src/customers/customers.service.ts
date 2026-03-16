import { DatabaseService } from './../database/database.service';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomersService {

  constructor(private readonly db: DatabaseService){}

  async create(createCustomerDto: CreateCustomerDto) {
      const created = await this.db.customer.create({ data: createCustomerDto });
      if(!created)
        throw new BadRequestException('Could not create customer');
      return created;
    }
  
    async findAll() {
      const finds = await this.db.customer.findMany();
      if(!finds)
        throw new NotFoundException('customer not found')
      return finds;
    }
  
    async findOne(id: string) {
      const find = await this.db.customer.findUnique({ where : { id } });
      if(!find)
        throw new NotFoundException('customer not found');
      return find;
    }
  
    async update(id: string, updateCustomerDto: UpdateCustomerDto) {
      const updated = await this.db.customer.update({
         where : { id },
         data: updateCustomerDto});
      if(!updated)
        throw new NotFoundException('customer not found');
      return updated;
    }
  
    async remove(id: string) {
      const deleted = await this.db.customer.delete({
        where : { id }
      });
      if(!deleted)
        throw new NotFoundException('customer not found');
      return 'Successfully deleted'
    }
}
