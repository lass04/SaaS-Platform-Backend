import { IsString, IsNotEmpty, IsEmail, IsOptional } from 'class-validator';

export class UpdateUserDto{
    
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsOptional()
    @IsEmail()
    @IsNotEmpty()
    email: string;

}
