import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { projectProvider } from './project.providers';

@Module({
  controllers: [ProjectController],
  providers: [ProjectService, ...projectProvider],
})
export class ProjectModule {}
