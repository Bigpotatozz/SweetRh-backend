import { HttpException, Inject, Injectable } from '@nestjs/common';
import { CreateRaiddDto } from './dto/create-raidd.dto';
import { UpdateRaiddDto } from './dto/update-raidd.dto';
import { Raidd } from './entities/raidd.entity';

@Injectable()
export class RaiddService {
  constructor(
    @Inject('RAIDD_REPOSITORY') private readonly raiddRepository: typeof Raidd,
  ) {}
  async create(createRaiddDto: CreateRaiddDto) {
    try {
      const raidd = await this.raiddRepository.create({
        cota: createRaiddDto.cota,
        usuario: createRaiddDto.usuario,
        tiempo_entrega: createRaiddDto.tiempo_entrega,
        duracion: createRaiddDto.duracion,
        inicio: createRaiddDto.inicio,
        id_contract: createRaiddDto.id_contract,
      });
      return raidd;
    } catch (e) {
      console.log(e);

      return new HttpException('Error al crear el raidd', 500);
    }
  }

  async findAll() {
    try {
      const raidd = await this.raiddRepository.findAll();
      return raidd;
    } catch (e) {
      console.log(e);

      return new HttpException('Error al obtener los raidd', 500);
    }
  }

  async findOne(id: number) {
    try {
      const raidd = await this.raiddRepository.findOne({ where: { id } });
      return raidd;
    } catch (e) {
      console.log(e);

      return new HttpException('Error al obtener el raidd', 500);
    }
  }

  async update(id: number, updateRaiddDto: UpdateRaiddDto) {
    try {
      const raidd = await this.raiddRepository.findOne({ where: { id } });
      if (!raidd) {
        return new HttpException('Raidd no encontrado', 404);
      }

      raidd.update({
        cota: updateRaiddDto.cota,
        usuario: updateRaiddDto.usuario,
        tiempo_entrega: updateRaiddDto.tiempo_entrega,
        duracion: updateRaiddDto.duracion,
        inicio: updateRaiddDto.inicio,
      });
      return raidd;
    } catch (e) {
      console.log(e);

      return new HttpException('Error al actualizar el raidd', 500);
    }
  }

  async remove(id: number) {
    try {
      const raidd = await this.raiddRepository.findOne({ where: { id } });
      if (!raidd) {
        return new HttpException('Raidd no encontrado', 404);
      }
      raidd.destroy();
      return raidd;
    } catch (e) {
      console.log(e);

      return new HttpException('Error al eliminar el raidd', 500);
    }
  }
}
