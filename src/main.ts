import 'dotenv/config';
import helmet from 'helmet';
import { AuthGuard } from './guards/auth.guard';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import cookieParser from 'cookie-parser';
import { doubleCsrf } from 'csrf-csrf';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(cookieParser());
  app.use(helmet());
  app.set('trust proxy','Loopback');

  app.useGlobalPipes(new ValidationPipe()); // Consider DTO's constraints with ValidationPipe
  //app.useGlobalGuards(new AuthGuard()); // Use a global auth guard from ./guards/auth.guard
  
  app.enableCors({
    origin : 'http://localhost:5173', // Allowed Requests Origin
    methods: ['GET','POST','PUT','DELETE'], // HTTP Methods
    allowedHeaders: ['Content-Type','Authorization'], // Allowed request Headers
    exposedHeaders: ['Content-Range','X-Total-Count'], // Response Headers
    maxAge: 600,
    credentials:true // Request must contain tokens or headers
  });
  
  const {
    doubleCsrfProtection,
    invalidCsrfTokenError,
  } = doubleCsrf({
      cookieName: '_host-csrf',
      cookieOptions:{
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        httpOnly: false,
        path: '/',
        maxAge: 60*60*24
      },

      getSecret: () => process.env.CSRF_TOKEN as string,
      getSessionIdentifier: (req:any) => req.sessionID as string,

  });

  app.use(doubleCsrfProtection);
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
