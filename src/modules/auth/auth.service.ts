import { CompaniesService } from 'src/modules/companies/companies.service';
import { RegisterDto } from './dto/register.dto';
import { JwtService } from '@nestjs/jwt';
import { Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { UsersService } from 'src/modules/users/users.service';
import bcrypt from 'bcrypt';


@Injectable()
export class AuthService {

  constructor(
    private userService: UsersService,
    private companyService: CompaniesService,
    private jwtService: JwtService
   ){}

  async login(dto: LoginDto){
    const user = await this.userService.findByEmail(dto.email); 
    if(!user)
      throw new NotFoundException('User not found');
    
    const verify = await bcrypt.compare(dto.password,user.passwordHash);
    if(!verify)
      throw new UnauthorizedException('Not authorized'); 

    try{

      const payload = { sub: user.id, email: user.email };
      const accessToken = await this.jwtService.signAsync(payload);

      return { accessToken };

    }catch{
       throw new InternalServerErrorException('Failed to generate access token');
    }
  }

  async register(dto: RegisterDto){
    const exist = await this.userService.findByEmail(dto.email);
    if(exist){
      throw new BadRequestException('User already exists');
    }
    
    const companyVerif = await this.companyService.findOne(dto.companyId);
    if(!companyVerif){
      throw new BadRequestException('Invalid companyId');
    }

      dto.passwordHash = await bcrypt.hash(dto.passwordHash,10);
      const createUser = await this.userService.create({
        companyId: dto.companyId,
        name: dto.name,
        email: dto.email,
        passwordHash: dto.passwordHash,
        role: dto.role
      });
      if(!createUser)
        throw new BadRequestException('Bad request');

      try{
        
        const payload = { sub: createUser.id, email: createUser.email }
        const accessToken = await this.jwtService.signAsync(payload);

        return { accessToken };

      }catch{
        throw new InternalServerErrorException('Failed to generate token');
      }

  }


}
