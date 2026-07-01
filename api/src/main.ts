import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService);
  config.get('database.url')
  config.get('cors.origin')

  app.setGlobalPrefix('api');

  app.enableCors({
    origin: config.getOrThrow<string>('cors.origin'),
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  const port = config.getOrThrow<number>('app.port');

  await app.listen(port);

  Logger.log(`🚀 API running at http://localhost:${port}/api`);
}

bootstrap();