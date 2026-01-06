import { Module } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { ActivityController } from './activity.controller';
import { activityProvider } from './activity.providers';

@Module({
  controllers: [ActivityController],
  providers: [ActivityService, ...activityProvider],
})
export class ActivityModule {}
