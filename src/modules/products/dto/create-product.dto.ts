import { IsString, IsNotEmpty, IsDecimal, IsInt } from 'class-validator';

export class CreateProductDto {
    
   @IsString()
   @IsNotEmpty()
   companyId: string;

   @IsString()
   @IsNotEmpty()
   categoryId: string;
   
   @IsString()
   @IsNotEmpty()
   name:string;

   @IsString()
   @IsNotEmpty()
   description: string;

   @IsDecimal()
   @IsNotEmpty()
   price: number;

   @IsDecimal()
   @IsNotEmpty()
   costPrice: string;
   
   @IsInt()
   @IsNotEmpty()
   stockQuantity: number;

   @IsString()
   @IsNotEmpty()
   barcode: string;

   @IsString()
   @IsNotEmpty()
   sku: string;
}
