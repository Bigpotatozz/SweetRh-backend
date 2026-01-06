import { ProjectActivity } from './entities/project-activity.entity';

export const projectActivitiesProvider = [
  {
    provide: 'PROJECT_ACTIVITIES_REPOSITORY',
    useValue: ProjectActivity,
  },
];
