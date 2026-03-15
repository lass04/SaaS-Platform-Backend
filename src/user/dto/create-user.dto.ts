import { Exclude } from 'class-transformer';
import { IsString, IsNotEmpty, IsEmail, IsEnum, IsOptional } from 'class-validator';

enum roles{
    ADMIN,
    USER
} 

export class CreateUserDto {
    @IsString({ message: 'CompanyId(Fk) must be a string'})
    @IsNotEmpty({ message: 'CompanyId(Fk) must not be empty'})
    companyId: string;
    @IsString({ message: 'Name must be a string'})
    @IsNotEmpty({ message: 'Name must not be empty'})
    name: string;
    @IsEmail({ message: 'Invalid Email'})
    @IsNotEmpty({ message: 'Email must not be empty'})
    email: string;
    @Exclude()
    passwordHash: string;
    @IsOptional()
    @IsNotEmpty({ message: 'createdAt must not be empty'})
    createdAt: Date = new Date();
    @IsEnum(roles)
    @IsNotEmpty({ message: 'Missing role'})
    role: string;
   
}

