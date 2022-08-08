import { Courses } from 'src/modules/courses/entities/courses.entity';

export interface ITags {
    name: string;
    courses: Courses;
}
