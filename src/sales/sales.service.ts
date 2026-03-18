import { DatabaseService } from './../database/database.service';
import { Injectable } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';

@Injectable()
export class SalesService {

  constructor(private readonly db: DatabaseService){}

  async create(createSaleDto: CreateSaleDto) {
    return await this.db.sale.create({ data: createSaleDto});
  }

  async findAll() {
    return await this.db.sale.findMany();
  }

  async findOne(id: string) {
    return this.db.sale.findUnique({
      where: { id }
    });
  }

  async update(id: string, updateSaleDto: UpdateSaleDto) {
    return await this.db.sale.update({
      where: { id },
      data: updateSaleDto
    });
  }

  async remove(id: string) {
    return await this.db.product.delete({ where: { id }});
  }
}
