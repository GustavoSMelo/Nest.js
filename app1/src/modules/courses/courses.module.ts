import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tags } from '../tags/entities/tags.entity';
import { TagsModule } from '../tags/tags.module';
import { CoursesController } from './controller/courses.controller';
import { Courses } from './entities/courses.entity';
import { CoursesService } from './services/courses.service';

@Module({
    imports: [TypeOrmModule.forFeature([Courses]), TagsModule],
    controllers: [CoursesController],
    providers: [CoursesService],
})
export class CoursesModule {}
