import { IsString, IsNotEmpty, IsEmail, MinLength, IsEnum } from 'class-validator';

enum roles{
    ADMIN,
    EMPLOYEE
}

export class RegisterDto{

    @IsString()
    @IsNotEmpty()
    companyId: string;
    
    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    passwordHash: string;

    @IsEnum(roles)
    @IsNotEmpty()
    role: string;
    
}