import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());
  app.use(helmet());

  app.enableCors({
    origin: 'http://localhost:3000',
    methods: ['GET','PATCH','POST','DELETE'],
    allowedHeaders: ['Content-Type','Authorization'],
    exposedHeaders: ['Content-Range','X-Toatl-Count'],
    maxAge:600,
    credentials: true
  })

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
