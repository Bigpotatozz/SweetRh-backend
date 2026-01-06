import { Module } from '@nestjs/common';
import { ContractService } from './contract.service';
import { ContractController } from './contract.controller';
import { contractProvider } from './contract.providers';

@Module({
  controllers: [ContractController],
  providers: [ContractService, ...contractProvider],
})
export class ContractModule {}
