import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { SchoolsModule } from './schools/schools.module';
import { TeachersModule } from './teachers/teachers.module';
import { ClassesModule } from './classes/classes.module';
import { SubjectsModule } from './subjects/subjects.module';
import { ClassSubjectsModule } from './class-subjects/class-subjects.module';
import { StudentClassesModule } from './student-classes/student-classes.module';
import { GradesModule } from './grades/grades.module';
import { AssignmentsModule } from './assignments/assignments.module';
import { StudentAssignmentsModule } from './student-assignments/student-assignments.module';
import { PaymentsModule } from './payments/payments.module';
import { ExpensesModule } from './expenses/expenses.module';
import { RevenuesModule } from './revenues/revenues.module';

@Module({
  imports: [
    UsersModule,
    SchoolsModule,
    TeachersModule,
    ClassesModule,
    SubjectsModule,
    ClassSubjectsModule,
    StudentClassesModule,
    GradesModule,
    AssignmentsModule,
    StudentAssignmentsModule,
    PaymentsModule,
    ExpensesModule,
    RevenuesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
