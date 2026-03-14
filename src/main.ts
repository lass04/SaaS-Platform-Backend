import 'dotenv/config';
import { AuthGuard } from './guards/auth.guard';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); // Consider DTO's constraints with ValidationPipe
  //app.useGlobalGuards(new AuthGuard()); // Use an auth guard from ./guards/auth.guard
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
