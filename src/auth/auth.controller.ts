
import { UsersService } from './../users/users.service';
import { SignInDto } from './dto/sign-in.dto';
import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService
  ) {}

  @Post('login')
  async signIn(@Body() signInDto: SignInDto){
    return this.authService.signIn(signInDto);
  }
}
