import { AuthGuard } from './common/guards/role.guard';
import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { CompaniesModule } from './modules/companies/companies.module';
import { APP_GUARD } from '@nestjs/core';


@Module({
  imports: [
    DatabaseModule,
    AuthModule, 
    UsersModule,
    CompaniesModule,
    JwtModule
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    }
  ]
})
export class AppModule {}
