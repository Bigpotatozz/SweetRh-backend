import { Action } from './entities/action.entity';

export const actionProvider = [
  {
    provide: 'ACTION_REPOSITORY',
    useValue: Action,
  },
];
