import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
export class CreateProductDto {
    @IsNotEmpty()
    @IsString()
    companyId: string;

    @IsString()
    @IsNotEmpty()
    categoryId: string;
    
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsNumber()
    @IsNotEmpty()
    costPrice: number;

    @IsInt()
    @IsNotEmpty()
    stockQuantity: number;

    @IsOptional()
    barcode: string;
}
