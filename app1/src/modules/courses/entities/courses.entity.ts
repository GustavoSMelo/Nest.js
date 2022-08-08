import { Tags } from 'src/modules/tags/entities/tags.entity';
import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Courses {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ type: 'text' })
    description: string;

    @ManyToMany(() => Tags, (tags) => tags.id, { cascade: true })
    @JoinTable()
    tags: Tags[];
}
