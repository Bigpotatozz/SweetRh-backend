import { Module } from '@nestjs/common';
import { RaiddService } from './raidd.service';
import { RaiddController } from './raidd.controller';
import { raiddProvider } from './raidd.providers';
import { ActionModule } from 'src/action/action.module';
import { ContractModule } from 'src/contract/contract.module';
import { ProjectModule } from 'src/project/project.module';

@Module({
  imports: [ActionModule, ContractModule, ProjectModule],
  controllers: [RaiddController],
  providers: [RaiddService, ...raiddProvider],
})
export class RaiddModule {}
