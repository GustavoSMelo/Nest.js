import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesModule } from './modules/courses/courses.module';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.POSTGRES_HOST,
            database: process.env.POSTGRES_DB,
            password: process.env.POSTGRES_PASSWORD,
            username: process.env.POSTGRES_USER,
            port: Number(process.env.POSTGRES_PORT),
            synchronize: true,
            entities: ['dist/**/*.entity.js'],
        }),
        CoursesModule,
    ],
})
export class AppModule {}
