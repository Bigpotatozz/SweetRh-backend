import { Injectable } from '@nestjs/common';
import { CreateRaiddDto } from './dto/create-raidd.dto';
import { UpdateRaiddDto } from './dto/update-raidd.dto';

@Injectable()
export class RaiddService {
  create(createRaiddDto: CreateRaiddDto) {
    return 'This action adds a new raidd';
  }

  findAll() {
    return `This action returns all raidd`;
  }

  findOne(id: number) {
    return `This action returns a #${id} raidd`;
  }

  update(id: number, updateRaiddDto: UpdateRaiddDto) {
    return `This action updates a #${id} raidd`;
  }

  remove(id: number) {
    return `This action removes a #${id} raidd`;
  }
}
