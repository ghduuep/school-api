import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClassSubjectsService } from './class-subjects.service';
import { CreateClassSubjectDto } from './dto/create-class-subject.dto';
import { UpdateClassSubjectDto } from './dto/update-class-subject.dto';

@Controller('class-subjects')
export class ClassSubjectsController {
  constructor(private readonly classSubjectsService: ClassSubjectsService) {}

  @Post()
  create(@Body() createClassSubjectDto: CreateClassSubjectDto) {
    return this.classSubjectsService.create(createClassSubjectDto);
  }

  @Get()
  findAll() {
    return this.classSubjectsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.classSubjectsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClassSubjectDto: UpdateClassSubjectDto) {
    return this.classSubjectsService.update(+id, updateClassSubjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.classSubjectsService.remove(+id);
  }
}
