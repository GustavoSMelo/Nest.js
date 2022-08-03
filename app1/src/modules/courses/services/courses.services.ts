import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ICourses } from '../dto/courses.dto';
import { Courses } from '../entities/courses.entity';

@Injectable()
export class CoursesService {
    public constructor(
        @InjectRepository(Courses)
        private readonly coursesRepository: Repository<Courses>,
    ) {}

    public save(courses: ICourses) {
        return this.coursesRepository.save(courses);
    }

    public find() {
        return this.coursesRepository.find();
    }

    public findOne(id: number) {
        return this.coursesRepository.findOne({ where: { id } });
    }

    public delete(id: number) {
        return this.coursesRepository.delete(id);
    }

    public async update(id: number, course: ICourses) {
        const registredCourse = await this.coursesRepository.findOne({
            where: { id },
        });

        registredCourse.name = course.name;
        registredCourse.description = course.description;

        this.coursesRepository.update(id, registredCourse);
    }
}
