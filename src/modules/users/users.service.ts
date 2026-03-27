import { DatabaseService } from '../database/database.service';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Injectable()
export class UsersService {

  constructor(private readonly db: DatabaseService){}

 
     async create(dto: CreateUserDto) {
       const created = await this.db.user.create({ data: dto });
       if(!created)
         throw new BadRequestException('Bad request')
       return created;
     }
   
     async findAll() {
       const finds = await this.db.user.findMany(); 
       if(!finds)
         throw new NotFoundException('Not found');
       return finds;
     }
   
     async findOne(id: string) {
       const find = await this.db.user.findUnique({
         where: { id }
       });
       if(!find)
         throw new NotFoundException('Not found');
       return find;
     }
   
     async update(id: string, dto: UpdateUserDto) {
       const updated = await this.db.user.update({
         where: { id },
         data: dto
       });
       if(!updated)
         throw new NotFoundException('Not found');
       return(200);
     }
   
     async remove(id: string) {
       const removed = await this.db.user.delete({
         where: { id }
       });
       if(!removed)
         throw new NotFoundException('Not found');
       return(204);
     }

}
