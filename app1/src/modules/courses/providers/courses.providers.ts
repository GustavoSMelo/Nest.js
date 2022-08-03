import { DataSource } from 'typeorm';
import { Courses } from '../entities/courses.entity';

export const coursesProviders = [
    {
        provide: 'COURSES_REPOSITORY',
        useFactory: (dataSource: DataSource) =>
            dataSource.getRepository(Courses),
        inject: ['DATA_SOURCE'],
    },
];
