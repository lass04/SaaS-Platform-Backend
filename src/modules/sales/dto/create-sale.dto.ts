import { IsString, IsNotEmpty, IsDecimal, IsEnum, IsOptional } from 'class-validator';
import { PaymentMethod, SaleStatus } from '@prisma/client';

export class CreateSaleDto {
    
    @IsString()
    @IsNotEmpty()
    companyId: string;

    @IsString()
    @IsNotEmpty()
    customerId: string;

    @IsDecimal()
    @IsNotEmpty()
    totalAmount: number;

    @IsEnum(PaymentMethod)
    @IsNotEmpty()
    paymentMethod: PaymentMethod;

    @IsEnum(SaleStatus)
    @IsNotEmpty()
    status: SaleStatus;

    @IsDecimal()
    @IsOptional()
    discount?: number;

    @IsDecimal()
    @IsOptional()
    tax?: number;
}