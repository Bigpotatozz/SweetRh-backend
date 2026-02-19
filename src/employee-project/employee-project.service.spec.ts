import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeProjectService } from './employee-project.service';

describe('EmployeeProjectService', () => {
  let service: EmployeeProjectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployeeProjectService],
    }).compile();

    service = module.get<EmployeeProjectService>(EmployeeProjectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
