import { Project } from './entities/project.entity';

export const projectProvider = [
  {
    provide: 'PROJECT_REPOSITORY',
    useValue: Project,
  },
];
