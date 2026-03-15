import { IsOptional, IsNotEmpty, IsString } from 'class-validator';
export class CreateCategoryDto {
    
    @IsNotEmpty()
    @IsString()
    companyId: string;
    
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    description: string;
    
    @IsOptional()
    @IsNotEmpty()
    createdAt: Date = new Date();
}
