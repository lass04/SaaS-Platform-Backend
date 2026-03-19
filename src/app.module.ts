import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompaniesModule } from './companies/companies.module';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { CustomersModule } from './customers/customers.module';
import { AuthModule } from './auth/auth.module';
import { ThrottlerModule,ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { ProductsModule } from './products/products.module';
import { SalesModule } from './sales/sales.module';
import { SaleItemsModule } from './sale-items/sale-items.module';

@Module({
  imports: [
    CompaniesModule,
    DatabaseModule,
    UsersModule, 
    CategoriesModule, 
    CustomersModule, 
    CustomersModule, 
    AuthModule,
    ThrottlerModule.forRoot([
      {
        name: 'short',
        ttl: 1000,
        limit: 3
      },
      {
        name: 'medium',
        ttl: 10000,
        limit: 10
      },
      {
        name: 'short',
        ttl: 100000,
        limit: 100
      },
  ]),
    ProductsModule,
    SalesModule,
    SaleItemsModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard
    }
  ],
})
export class AppModule {}
