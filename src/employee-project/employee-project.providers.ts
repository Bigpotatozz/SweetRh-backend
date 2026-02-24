import { EmployeeProject } from './entities/employee-project.entity';

export const employeeProjectProvider = [
  {
    provide: 'EMPLOYEE_PROJECT_REPOSITORY',
    useValue: EmployeeProject,
  },
];
