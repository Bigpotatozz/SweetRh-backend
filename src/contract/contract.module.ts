import { Module } from '@nestjs/common';
import { ContractService } from './contract.service';
import { ContractController } from './contract.controller';
import { contractProvider } from './contract.providers';
import { ProjectModule } from 'src/project/project.module';

@Module({
  imports: [ProjectModule],
  controllers: [ContractController],
  providers: [ContractService, ...contractProvider],
})
export class ContractModule {}
