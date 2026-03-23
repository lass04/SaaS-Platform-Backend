import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { Body, Controller, Post, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() dto: LoginDto){
    return this.authService.login(dto);
  }

  @Post('register')
  register(@Body() dto: RegisterDto){
    return this.authService.register(dto);
  }

  @Post('logout')
  logout(){}

}
