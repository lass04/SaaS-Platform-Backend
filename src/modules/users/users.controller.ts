import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, UseInterceptors, ClassSerializerInterceptor, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserResponseDto } from './dto/user-response.dto';
import { plainToInstance } from 'class-transformer';
import { Roles } from 'src/common/decorators/role.decorator';

@Controller('users')
@UseInterceptors(ClassSerializerInterceptor)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll() {
    const finds = await this.usersService.findAll();
    if(!finds)
      throw new NotFoundException('No users found');
    return finds;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const find = await this.usersService.findOne(id);
    if(!find)
      throw new NotFoundException('User not found');
    return 
  }

  @Roles('USER')
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const updated = await this.usersService.update(id, updateUserDto);
    if(!updated)
      throw new NotFoundException('User not found');
    return plainToInstance(UserResponseDto,updated);
  }

  @Roles('USER')
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const deleted = await this.usersService.remove(id);
    if(!deleted)
      throw new NotFoundException('User not found');
  }

}
