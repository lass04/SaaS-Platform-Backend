import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';
import { SalesService } from './sales.service';
import { SalesController } from './sales.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [SalesController],
  providers: [SalesService],
})
export class SalesModule {}
