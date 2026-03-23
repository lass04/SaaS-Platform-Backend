import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesController } from './companies.controller';

@Module({
  imports:[DatabaseModule],
  controllers: [CompaniesController],
  providers: [CompaniesService],
})
export class CompaniesModule {}
