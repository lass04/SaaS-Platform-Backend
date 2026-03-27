import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class SalesService {
  
    constructor(private readonly db: DatabaseService){}
  
    async create(dto: CreateSaleDto) {
      const created = await this.db.sale.create({ data: dto });
      if(!created)
        throw new BadRequestException('Bad request')
      return created;
    }
  
    async findAll() {
      const finds = await this.db.sale.findMany(); 
      if(!finds)
        throw new NotFoundException('Not found');
      return finds;
    }
  
    async findOne(id: string) {
      const find = await this.db.sale.findUnique({
        where: { id }
      });
      if(!find)
        throw new NotFoundException('Not found');
      return find;
    }
  
    async update(id: string, dto: UpdateSaleDto) {
      const updated = await this.db.sale.update({
        where: { id },
        data: dto
      });
      if(!updated)
        throw new NotFoundException('Not found');
      return(200);
    }
  
    async remove(id: string) {
      const removed = await this.db.sale.delete({
        where: { id }
      });
      if(!removed)
        throw new NotFoundException('Not found');
      return(204);
    }
}