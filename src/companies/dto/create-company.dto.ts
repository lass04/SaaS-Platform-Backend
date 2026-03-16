import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class CreateCompanyDto {
  
  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty({ message: 'Name must not be empty' })
  name: string;
  
  @IsString({ message: 'Phone must be  string' })
  @IsNotEmpty({ message: 'Phone must not be empty vide' })
  phone: string;
  
  @IsEmail({ message: 'This is not an Email' })
  @IsNotEmpty({ message: 'Email must not be empty' })
  email: string;
  
  @IsNotEmpty({ message: 'Subscription plan must be determined'})
  @IsString({ message: 'Subscription plan must be a string'})
  subscriptionPlan: string;

}
