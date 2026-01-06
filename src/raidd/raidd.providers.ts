import { Raidd } from './entities/raidd.entity';

export const raiddProvider = [
  {
    provide: 'RAIDD_REPOSITORY',
    useValue: Raidd,
  },
];
