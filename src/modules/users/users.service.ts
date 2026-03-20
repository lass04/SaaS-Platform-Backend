import { DatabaseService } from '../database/database.service';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Injectable()
export class UsersService {

  constructor(private readonly db: DatabaseService){}

  async create(user: CreateUserDto) {
    return await this.db.user.create({ data: user });
  }

  async findAll() {
    return await this.db.user.findMany();
  }

  async findOne(id: string) {
    return await this.db.user.findUnique({
      where: { id }
    });
  }

   async findByEmail(email: string) {
    return await this.db.user.findUnique({
      where: { email }
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.db.user.update({
      where: { id },
      data: updateUserDto
    });
  }

  async remove(id: string) {
    return await this.db.user.delete({
      where: { id }
    });
  }

}
