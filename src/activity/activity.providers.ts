import { Activity } from './entities/activity.entity';

export const activityProvider = [
  {
    provide: 'ACTIVITY_REPOSITORY',
    useValue: Activity,
  },
];
