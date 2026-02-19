import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeProjectController } from './employee-project.controller';
import { EmployeeProjectService } from './employee-project.service';

describe('EmployeeProjectController', () => {
  let controller: EmployeeProjectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeeProjectController],
      providers: [EmployeeProjectService],
    }).compile();

    controller = module.get<EmployeeProjectController>(EmployeeProjectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
