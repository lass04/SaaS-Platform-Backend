import { DatabaseService } from './../database/database.service';
import { Injectable } from '@nestjs/common';
import { CreateSaleItemDto } from './dto/create-sale-item.dto';
import { UpdateSaleItemDto } from './dto/update-sale-item.dto';

@Injectable()
export class SaleItemsService {

  constructor(private readonly db: DatabaseService){}

  async create(createSaleItemDto: CreateSaleItemDto) {
      return await this.db.saleItem.create({ data: createSaleItemDto});
    }
  
    async findAll() {
      return await this.db.saleItem.findMany();
    }
  
    async findOne(id: string) {
      return this.db.saleItem.findUnique({
        where: { id }
      });
    }
  
    async update(id: string, updateSaleItemDto: UpdateSaleItemDto) {
      return await this.db.saleItem.update({
        where: { id },
        data: updateSaleItemDto
      });
    }
  
    async remove(id: string) {
      return await this.db.saleItem.delete({ where: { id } });
    }
}
