import { Module } from '@nestjs/common';
import { ContractService } from './contract.service';
import { ContractController } from './contract.controller';
import { contractProvider } from './contract.providers';
import { ProjectModule } from 'src/project/project.module';
import { EmployeeProjectModule } from 'src/employee-project/employee-project.module';

@Module({
  imports: [ProjectModule, EmployeeProjectModule],
  controllers: [ContractController],
  providers: [ContractService, ...contractProvider],
  exports: [...contractProvider],
})
export class ContractModule {}
