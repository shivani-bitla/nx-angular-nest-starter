import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';

import databaseConfig from '../config/database.config';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(
    @Inject(databaseConfig.KEY)
    private readonly database: ConfigType<typeof databaseConfig>,
  ) {
    super({
      adapter: new PrismaPg({
        connectionString: database.url,
      }),
    });
  }
}