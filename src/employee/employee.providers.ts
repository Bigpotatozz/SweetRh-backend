import { Employee } from './entities/employee.entity';

export const employeeProvider = [
  {
    provide: 'EMPLOYEE_REPOSITORY',
    useValue: Employee,
  },
];
