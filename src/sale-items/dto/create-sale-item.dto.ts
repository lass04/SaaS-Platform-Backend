import { IsNotEmpty, IsString, IsInt } from 'class-validator';
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


    @IsInt()
    @IsNotEmpty()
    unitPrice: number;


    @IsInt()
    @IsNotEmpty()
    totalPrice: number;

}
