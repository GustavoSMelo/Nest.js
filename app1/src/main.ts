import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { connectionSource } from './modules/config/ormconfig';

dotenv.config();

const bootstrap = async () => {
    await connectionSource.initialize();
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
};

bootstrap();
