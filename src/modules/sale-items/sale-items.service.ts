import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { CreateSaleItemDto } from './dto/create-sale-item.dto';
import { UpdateSaleItemDto } from './dto/update-sale-item.dto';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class SaleItemsService {
  
    constructor(private readonly db: DatabaseService){}
  
    async create(dto: CreateSaleItemDto) {
      const created = await this.db.saleItem.create({ data: dto });
      if(!created)
        throw new BadRequestException('Bad request')
      return created;
    }
  
    async findAll() {
      const finds = await this.db.saleItem.findMany(); 
      if(!finds)
        throw new NotFoundException('Not found');
      return finds;
    }
  
    async findOne(id: string) {
      const find = await this.db.saleItem.findUnique({
        where: { id }
      });
      if(!find)
        throw new NotFoundException('Not found');
      return find;
    }
  
    async update(id: string, dto: UpdateSaleItemDto) {
      const updated = await this.db.saleItem.update({
        where: { id },
        data: dto
      });
      if(!updated)
        throw new NotFoundException('Not found');
      return(200);
    }
  
    async remove(id: string) {
      const removed = await this.db.saleItem.delete({
        where: { id }
      });
      if(!removed)
        throw new NotFoundException('Not found');
      return(204);
    }
}