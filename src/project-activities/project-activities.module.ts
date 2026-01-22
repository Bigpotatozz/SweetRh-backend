import { Module } from '@nestjs/common';
import { ProjectActivitiesService } from './project-activities.service';
import { ProjectActivitiesController } from './project-activities.controller';
import { projectActivitiesProvider } from './project-activities.providers';

@Module({
  controllers: [ProjectActivitiesController],
  providers: [ProjectActivitiesService, ...projectActivitiesProvider],
  exports: [...projectActivitiesProvider],
})
export class ProjectActivitiesModule {}
