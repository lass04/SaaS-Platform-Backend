import 'dotenv/config';
import { AuthGuard } from './guards/auth.guard';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); // Consider DTO's constraints with ValidationPipe
  //app.useGlobalGuards(new AuthGuard()); // Use an auth guard from ./guards/auth.guard
  app.enableCors({
    origin : 'http://localhost:5173', // Allowed Requests Origin
    methods: ['GET','POST','PUT','DELETE'], // HTTP Methods
    allowHeaders: ['Content-Type','Authorization'], // Allowed request Headers
    exposedHeaders: ['Content-Range','X-Total-Count'], // Response Headers
    crendentials:true // Request must contain tokens or headers
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
