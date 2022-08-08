import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { TagsServices } from '../services/tags.service';
import { ITags } from '../types/tags.interface';

@Controller('tags')
export class TagsController {
    public constructor(private readonly tagsService: TagsServices) {}

    @Post()
    public save(@Body() body: ITags) {
        return this.tagsService.save(body);
    }

    @Get()
    public index() {
        return this.tagsService.index();
    }

    @Get(':id')
    public show(@Param('id') id: number) {
        return this.tagsService.show(+id);
    }

    @Delete(':id')
    public delete(@Param('id') id: number) {
        return this.tagsService.delete(+id);
    }

    @Put(':id')
    public update(@Param('id') id: number, @Body() body: ITags) {
        return this.tagsService.update(+id, body);
    }
}
