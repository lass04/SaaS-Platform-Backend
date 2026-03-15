import { DatabaseService } from './../database/database.service';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly db: DatabaseService){}

  async create(createUserDto: CreateUserDto) {
    createUserDto.passwordHash = await bcrypt.hash(createUserDto.passwordHash,10);
    return await this.db.user.create({ data: createUserDto });
  }

  async findAll() {
    return await this.db.user.findMany();
  }

  async findOne(id: string) {
    return await this.db.user.findUnique({
      where: { id }
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
    })
  }
}
