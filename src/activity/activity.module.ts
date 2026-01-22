import { Module } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { ActivityController } from './activity.controller';
import { activityProvider } from './activity.providers';
import { ProjectActivitiesModule } from 'src/project-activities/project-activities.module';
import { EmployeeModule } from 'src/employee/employee.module';

@Module({
  imports: [ProjectActivitiesModule, EmployeeModule],
  controllers: [ActivityController],
  providers: [ActivityService, ...activityProvider],
})
export class ActivityModule {}
