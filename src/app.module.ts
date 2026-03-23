import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { CompaniesModule } from './modules/companies/companies.module';


@Module({
  imports: [
    DatabaseModule,
    AuthModule, 
    UsersModule,
    CompaniesModule
  ]
})
export class AppModule {}
