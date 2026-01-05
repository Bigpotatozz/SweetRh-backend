import { Module } from '@nestjs/common';
import { RaiddService } from './raidd.service';
import { RaiddController } from './raidd.controller';

@Module({
  controllers: [RaiddController],
  providers: [RaiddService],
})
export class RaiddModule {}
