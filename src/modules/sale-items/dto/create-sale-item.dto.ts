import { IsString, IsNotEmpty, IsDecimal, IsInt } from 'class-validator';

export class CreateSaleItemDto {
    
    @IsString()
    @IsNotEmpty()
    saleId: string;

    @IsString()
    @IsNotEmpty()
    productId: string;

    @IsInt()
    @IsNotEmpty()
    quantity: number;

    @IsDecimal()
    @IsNotEmpty()
    unitPrice: number;

    @IsDecimal()
    @IsNotEmpty()
    totalPrice: number;
}