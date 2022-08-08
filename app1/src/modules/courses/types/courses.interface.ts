import { Tags } from 'src/modules/tags/entities/tags.entity';

export interface ICourses {
    id: number;
    name: string;
    description: string;
    tags: Tags[];
}
