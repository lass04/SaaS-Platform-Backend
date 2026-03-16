import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompaniesModule } from './companies/companies.module';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { CustomersModule } from './customers/customers.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [CompaniesModule, DatabaseModule, UsersModule, CategoriesModule, CustomersModule, CustomersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
