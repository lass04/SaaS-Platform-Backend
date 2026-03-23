import { IsString, IsNotEmpty, IsEmail, IsEnum } from 'class-validator';

enum subscriptionPlan{
    FREE,
    BASIC,
    PRO,
    ENTREPRISE
}

export class CreateCompanyDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    phone: string;

    @IsEnum(subscriptionPlan)
    @IsNotEmpty()
    subscriptionPlan: string;

}
