import { Column, Entity } from 'typeorm';

@Entity()
export class Courses {
    @Column({ primary: true, generated: true })
    id: number;

    @Column()
    name: string;

    @Column({ type: 'text' })
    description: string;
}
