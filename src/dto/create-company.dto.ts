import { IsString, IsNotEmpty, IsEmail, IsInt } from 'class-validator';

export class CreateCompanyDto {
  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty({ message: 'Name must not be empty' })
  name: string;
  @IsInt({ message: 'Phone must be numeric' })
  @IsNotEmpty({ message: 'Phone must not be empty vide' })
  phone: number;
  @IsEmail({ message: 'This is not an Email' })
  @IsNotEmpty({ message: 'Email must not be empty' })
  email: string;
  @IsNotEmpty({ message: 'Creation date must not be empty' })
  createdAt: Date = new Date();
}
