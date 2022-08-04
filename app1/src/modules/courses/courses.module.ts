import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesController } from './controller/courses.controller';
import { Courses } from './entities/courses.entity';
import { CoursesService } from './services/courses.services';

@Module({
    imports: [TypeOrmModule.forFeature([Courses])],
    controllers: [CoursesController],
    providers: [CoursesService],
})
export class CoursesModule {}
