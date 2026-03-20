import { IsString, IsNotEmpty, IsEmail, MinLength, IsEnum } from 'class-validator';
import { Exclude } from 'class-transformer';

enum roles{
    ADMIN,
    EMPLOYEE
}

export class UserResponseDto{
        
    @IsString()
    @IsNotEmpty()
    companyId: string;
    
    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsEmail()
    @IsNotEmpty()
    email: string;
      
    @Exclude()
    @IsString()
    @MinLength(8)
    passwordHash: string;
    
    @IsEnum(roles)
    @IsNotEmpty()
    role: string;
}