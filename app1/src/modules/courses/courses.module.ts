import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesController } from './controller/courses.controller';
import { Courses } from './entities/courses.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Courses])],
    controllers: [CoursesController],
})
export class CoursesModule {}
