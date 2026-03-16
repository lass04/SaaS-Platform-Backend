import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class CreateCustomerDto {
    
    @IsNotEmpty()
    @IsString()
    companyId: string;
    
    @IsNotEmpty()
    @IsString()
    name: string;
    
    @IsNotEmpty()
    @IsEmail()
    email: string;
    
    @IsNotEmpty()
    @IsString()
    phone: string;

}
