import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagsController } from './controllers/tags.controller';
import { Tags } from './entities/tags.entity';
import { TagsServices } from './services/tags.service';

@Module({
    imports: [TypeOrmModule.forFeature([Tags])],
    controllers: [TagsController],
    providers: [TagsServices],
    exports: [TagsServices],
})
export class TagsModule {}
