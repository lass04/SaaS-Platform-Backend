import { AuthGuard } from './common/guards/role.guard';
import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { CompaniesModule } from './modules/companies/companies.module';
import { APP_GUARD } from '@nestjs/core';
import { ProductsModule } from './modules/products/products.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { CustomersModule } from './modules/customers/customers.module';


@Module({
  imports: [
    DatabaseModule,
    AuthModule, 
    UsersModule,
    CompaniesModule,
    JwtModule,
    ProductsModule,
    CategoriesModule,
    CustomersModule
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    }
  ]
})
export class AppModule {}
