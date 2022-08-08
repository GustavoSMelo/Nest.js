import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tags } from '../entities/tags.entity';
import { ITags } from '../types/tags.interface';

@Injectable()
export class TagsServices {
    public constructor(
        @InjectRepository(Tags)
        private readonly tagsRepository: Repository<Tags>,
    ) {}

    public save(tags: ITags) {
        return this.tagsRepository.save(tags);
    }

    public index() {
        return this.tagsRepository.find();
    }

    public show(id: number) {
        return this.tagsRepository.findOne({ where: { id } });
    }

    public delete(id: number) {
        return this.tagsRepository.delete(id);
    }

    public async update(id: number, tags: ITags) {
        const tag = await this.tagsRepository.findOne({ where: { id } });

        tag.name = tags.name;

        return this.tagsRepository.update(id, tag);
    }
}
