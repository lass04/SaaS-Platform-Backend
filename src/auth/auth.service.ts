import { UsersService } from './../users/users.service';
import { SignOptions } from './../../node_modules/@types/jsonwebtoken/index.d';
import { SignInDto } from './dto/sign-in.dto';
import { DatabaseService } from './../database/database.service';
import { Injectable, UnauthorizedException, NotFoundException } from '@nestjs/common';
import bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService
    ){}

    async signIn(signInDto:SignInDto){
        const user = await this.userService.findByEmail(signInDto.email);
        if(!user)
            throw new NotFoundException('Invalid credentials');
        const verifPass = await bcrypt.compare(signInDto.password,user.passwordHash);
        if(!verifPass)
            throw new UnauthorizedException('Unauthorized (wrong password)');
        
        const payload = { sub: user.id, email: user.email };
        const access_token = await this.jwtService.signAsync(payload);

        return { access_token }
    }
}
