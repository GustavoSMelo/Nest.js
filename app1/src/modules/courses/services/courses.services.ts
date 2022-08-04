import {
    BadRequestException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ICourses } from '../types/courses.interface';
import { Courses } from '../entities/courses.entity';

@Injectable()
export class CoursesService {
    public constructor(
        @InjectRepository(Courses)
        private readonly coursesRepository: Repository<Courses>,
    ) {}

    public async save(courses: ICourses) {
        try {
            return await this.coursesRepository.save(courses);
        } catch (error) {
            throw new BadRequestException(
                `ERROR [ Service: Courses | Method: save ] -> ${error}`,
            );
        }
    }

    public find() {
        return this.coursesRepository.find();
    }

    public async findOne(id: number) {
        try {
            return await this.coursesRepository.findOne({ where: { id } });
        } catch (error) {
            throw new NotFoundException(
                `ERROR [ Service: Courses | Method: findOne ] -> ${error}`,
            );
        }
    }

    public async delete(id: number) {
        try {
            return await this.coursesRepository.delete(id);
        } catch (error) {
            throw new NotFoundException(
                `ERROR [ Service: Courses | Method: delete ] -> ${error}`,
            );
        }
    }

    public async update(id: number, course: ICourses) {
        try {
            const registredCourse = await this.coursesRepository.findOne({
                where: { id },
            });

            registredCourse.name = course.name;
            registredCourse.description = course.description;

            this.coursesRepository.update(id, registredCourse);
        } catch (error) {
            throw new NotFoundException(
                `ERROR [ Service: Courses | Method: update ] -> ${error}`,
            );
        }
    }
}
