import { Test, TestingModule } from '@nestjs/testing';
import { RaiddController } from './raidd.controller';
import { RaiddService } from './raidd.service';

describe('RaiddController', () => {
  let controller: RaiddController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RaiddController],
      providers: [RaiddService],
    }).compile();

    controller = module.get<RaiddController>(RaiddController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
