import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import configuration from '../config/configuration';
import { validationSchema } from '../config/validation';

import { PrismaModule } from '../prisma/prisma.module';
import { UsersModule } from './user/users.module';
import databaseConfig from '../config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      expandVariables: true,
      load: [configuration, databaseConfig],
      validationSchema,
    }),

    PrismaModule,

    UsersModule,
  ],
})
export class AppModule {}