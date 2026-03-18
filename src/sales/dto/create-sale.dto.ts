import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
export class CreateSaleDto {
    @IsString()
    @IsNotEmpty()
    companyId: string;

    @IsString()
    @IsNotEmpty()
    customerId: string;

    @IsNumber()
    @IsNotEmpty()
    totalAmount: number;

    @IsString()
    @IsNotEmpty()
    paymentMethod: string;

    
    @IsString()
    @IsNotEmpty()
    status: string;
}
