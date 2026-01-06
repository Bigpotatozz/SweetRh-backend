import { Contract } from './entities/contract.entity';

export const contractProvider = [
  {
    provide: 'CONTRACT_REPOSITORY',
    useValue: Contract,
  },
];
