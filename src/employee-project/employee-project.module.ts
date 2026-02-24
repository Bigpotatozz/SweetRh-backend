import { Module } from '@nestjs/common';
import { EmployeeProjectService } from './employee-project.service';
import { EmployeeProjectController } from './employee-project.controller';
import { employeeProjectProvider } from './employee-project.providers';

@Module({
  controllers: [EmployeeProjectController],
  providers: [EmployeeProjectService, ...employeeProjectProvider],
  exports: [...employeeProjectProvider],
})
export class EmployeeProjectModule {}
