import { HttpException, Inject, Injectable } from '@nestjs/common';
import { CreateActionDto } from './dto/create-action.dto';
import { UpdateActionDto } from './dto/update-action.dto';
import { Action } from './entities/action.entity';

@Injectable()
export class ActionService {
  constructor(
    @Inject('ACTION_REPOSITORY') private actionRepository: typeof Action,
  ) {}
  async create(createActionDto: CreateActionDto) {
    try {
      const action = await this.actionRepository.create({
        comentarios: createActionDto.comentarios,
        fecha_compromiso: createActionDto.fecha_compromiso,
        id_raidd: createActionDto.id_raidd,
        id_employee: createActionDto.id_employee,
      });
      return action;
    } catch (e) {
      console.log(e);
      return new HttpException('Error al crear la accion', 500);
    }
  }

  async findAll() {
    try {
      const actions = await this.actionRepository.findAll();
      return actions;
    } catch (e) {
      console.log(e);
      return new HttpException('Error al obtener las acciones', 500);
    }
  }

  async findOne(id: number) {
    try {
      const action = await this.actionRepository.findOne({
        where: { id_action: id },
      });
      return action;
    } catch (e) {
      console.log(e);
      return new HttpException('Error al obtener la accion', 500);
    }
  }

  async update(id: number, updateActionDto: UpdateActionDto) {
    try {
      const action = await this.actionRepository.findOne({
        where: { id_action: id },
      });
      if (!action) {
        return new HttpException('Accion no encontrada', 404);
      }

      await action.update({
        comentarios: updateActionDto.comentarios,
        fecha_compromiso: updateActionDto.fecha_compromiso,
        id_employee: updateActionDto.id_employee,
      });
      return action;
    } catch (e) {
      console.log(e);
      return new HttpException('Error al actualizar la accion', 500);
    }
  }

  async remove(id: number) {
    try {
      const action = await this.actionRepository.findOne({
        where: { id_action: id },
      });
      if (!action) {
        return new HttpException('Accion no encontrada', 404);
      }
      await action.destroy();
      return action;
    } catch (e) {
      console.log(e);
      return new HttpException('Error al eliminar la accion', 500);
    }
  }
}
