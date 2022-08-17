import { Tags } from 'src/modules/tags/entities/tags.entity';
import { TagsServices } from 'src/modules/tags/services/tags.service';
import { createMock } from 'ts-auto-mock';
import { Repository } from 'typeorm';

describe('TagsService', () => {
    let tagsServices: TagsServices;
    const tagsMock = {
        id: 1,
        name: 'tag-test',
    } as Tags;

    beforeAll(() => {
        const tagsRepository: Repository<Tags> = createMock<Repository<Tags>>({
            save: jest.fn().mockResolvedValue(tagsMock),
            delete: jest.fn().mockResolvedValue(tagsMock),
            update: jest.fn().mockResolvedValue(tagsMock),
            find: jest.fn().mockResolvedValue(tagsMock),
            findOne: jest.fn().mockResolvedValue(tagsMock),
        });

        tagsServices = new TagsServices(tagsRepository);
    });

    test('if coursesService is defined', () => {
        expect(tagsServices).toBeDefined();
    });

    test('save method on tagsServices', async () => {
        expect(await tagsServices.save(tagsMock)).toBe(tagsMock);
    });

    test('update method on tagsServices', async () => {
        expect(await tagsServices.update(tagsMock.id, tagsMock)).toBe(tagsMock);
    });

    test('find method on tagsServices', async () => {
        expect(await tagsServices.index()).toBe(tagsMock);
    });

    test('show method on tagsServices', async () => {
        expect(await tagsServices.show(tagsMock.id)).toBe(tagsMock);
    });

    test('delete method on tagsServices', async () => {
        expect(await tagsServices.delete(tagsMock.id)).toBe(tagsMock);
    });
});
