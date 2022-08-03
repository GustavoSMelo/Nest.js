import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CoursesModule } from './modules/courses/courses.module';
import { DatabaseModule } from './modules/database/database.module';

@Module({
    imports: [ConfigModule.forRoot(), DatabaseModule, CoursesModule],
})
export class AppModule {}
