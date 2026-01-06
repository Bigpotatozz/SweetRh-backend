import { Module } from '@nestjs/common';
import { RaiddService } from './raidd.service';
import { RaiddController } from './raidd.controller';
import { raiddProvider } from './raidd.providers';

@Module({
  controllers: [RaiddController],
  providers: [RaiddService, ...raiddProvider],
})
export class RaiddModule {}
