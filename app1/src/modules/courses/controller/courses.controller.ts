import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { CoursesService } from '../services/courses.services';
import { ICourses } from '../types/courses.interface';

@Controller('courses')
export class CoursesController {
    public constructor(private readonly coursesService: CoursesService) {}

    @Post()
    public save(@Body() body: ICourses) {
        return this.coursesService.save(body);
    }

    @Get()
    public index() {
        return this.coursesService.find();
    }

    @Get(':id')
    public show(@Param('id') id: number) {
        return this.coursesService.findOne(+id);
    }

    @Delete(':id')
    public delete(@Param('id') id: number) {
        return this.coursesService.delete(+id);
    }

    @Put()
    public update(@Param('id') id: number, @Body() body: ICourses) {
        return this.coursesService.update(+id, body);
    }
}
