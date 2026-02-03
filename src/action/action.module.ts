import { Module } from '@nestjs/common';
import { ActionService } from './action.service';
import { ActionController } from './action.controller';
import { actionProvider } from './action.providers';

@Module({
  controllers: [ActionController],
  providers: [ActionService, ...actionProvider],
  exports: [...actionProvider],
})
export class ActionModule {}
