import { UserReponseDto } from './dto/user-response.dto';
import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, BadRequestException, UseInterceptors, ClassSerializerInterceptor, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { plainToInstance } from 'class-transformer';

@Controller('users')
@UseInterceptors(ClassSerializerInterceptor)
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  @HttpCode(201)
  create(@Body() user: CreateUserDto) {
    const created = this.userService.create(user);
    if(!created)
      throw new BadRequestException('Could not create a user');
    return plainToInstance(UserReponseDto,created);
  }

  @Get()
  @HttpCode(200)
  findAll() {
    const finds = this.userService.findAll();
    if(!finds)
      throw new NotFoundException('No users found')
    return plainToInstance(UserReponseDto,finds);
  }

  @Get(':id')
  @HttpCode(200)
  findOne(@Param('id') id: string) {
    const find = this.userService.findOne(id);
    if(!find)
      throw new NotFoundException('User not found');
    return plainToInstance(UserReponseDto,find);
  }

  @Patch(':id')
  @HttpCode(200)
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const updated = this.userService.update(id, updateUserDto);
    if(!updated)
      throw new NotFoundException('User not found');
    return plainToInstance(UserReponseDto,updated);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    const deleted = this.userService.remove(id);
    if(!deleted)
      throw new NotFoundException('user not found');
    return 'Successfull deletion'
  }
}
