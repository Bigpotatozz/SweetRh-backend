import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { employeeProvider } from './employee.providers';

@Module({
  controllers: [EmployeeController],
  providers: [EmployeeService, ...employeeProvider],
})
export class EmployeeModule {}
