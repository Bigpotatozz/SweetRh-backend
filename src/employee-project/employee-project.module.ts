import { Module } from '@nestjs/common';
import { EmployeeProjectService } from './employee-project.service';
import { EmployeeProjectController } from './employee-project.controller';

@Module({
  controllers: [EmployeeProjectController],
  providers: [EmployeeProjectService],
})
export class EmployeeProjectModule {}
