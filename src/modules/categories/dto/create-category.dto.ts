import { IsString, IsNotEmpty } from 'class-validator';
export class CreateCategoryDto {

    @IsString()
    @IsNotEmpty()
    companyId: string;
    
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;
}
