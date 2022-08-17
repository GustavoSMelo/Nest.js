import { Courses } from 'src/modules/courses/entities/courses.entity';
import { CoursesService } from 'src/modules/courses/services/courses.service';
import { Tags } from 'src/modules/tags/entities/tags.entity';
import { TagsServices } from 'src/modules/tags/services/tags.service';
import { createMock } from 'ts-auto-mock';
import { Repository } from 'typeorm';

describe('CoursesService', () => {
    let coursesService: CoursesService;
    let coursesRepository: Repository<Courses>;
    let tagsService: TagsServices;
    const tagsMock = {
        id: 1,
        name: 'tag-test',
    } as Tags;
    const coursesMock = {
        name: 'test',
        description: 'test',
        id: 1,
        tags: [tagsMock],
    } as Courses;

    beforeEach(() => {
        coursesRepository = createMock<Repository<Courses>>({
            find: jest.fn().mockResolvedValue(coursesMock),
            findOne: jest.fn().mockResolvedValue(coursesMock),
            save: jest.fn().mockResolvedValue(coursesMock),
            update: jest.fn().mockResolvedValue(coursesMock),
            delete: jest.fn().mockResolvedValue(coursesMock),
        });
        tagsService = createMock<TagsServices>({
            index: jest.fn().mockResolvedValue(tagsMock),
            show: jest.fn().mockResolvedValue(tagsMock),
            save: jest.fn().mockResolvedValue(tagsMock),
            update: jest.fn().mockResolvedValue(tagsMock),
            delete: jest.fn().mockResolvedValue(tagsMock),
        });

        coursesService = new CoursesService(coursesRepository, tagsService);
    });

    test('if coursesService is defined', () => {
        expect(coursesService).toBeDefined();
    });

    test('save method on coursesService', async () => {
        expect(await coursesService.save(coursesMock)).toBe(coursesMock);
    });

    test('update method on coursesService', async () => {
        expect(await coursesService.update(coursesMock.id, coursesMock)).toBe(
            coursesMock,
        );
    });

    test('find method on coursesService', async () => {
        expect(await coursesService.find()).toBe(coursesMock);
    });

    test('show method on coursesService', async () => {
        expect(await coursesService.findOne(coursesMock.id)).toBe(coursesMock);
    });

    test('delete method on coursesService', async () => {
        expect(await coursesService.delete(coursesMock.id)).toBe(coursesMock);
    });
});
