import { Injectable } from '@nestjs/common';
import { CreateClassSubjectDto } from './dto/create-class-subject.dto';
import { UpdateClassSubjectDto } from './dto/update-class-subject.dto';

@Injectable()
export class ClassSubjectsService {
  create(createClassSubjectDto: CreateClassSubjectDto) {
    return 'This action adds a new classSubject';
  }

  findAll() {
    return `This action returns all classSubjects`;
  }

  findOne(id: number) {
    return `This action returns a #${id} classSubject`;
  }

  update(id: number, updateClassSubjectDto: UpdateClassSubjectDto) {
    return `This action updates a #${id} classSubject`;
  }

  remove(id: number) {
    return `This action removes a #${id} classSubject`;
  }
}
