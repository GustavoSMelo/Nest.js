import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
dotenv.config();

const bootstrap = async () => {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
};

bootstrap();
