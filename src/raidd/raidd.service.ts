import { HttpException, Inject, Injectable } from '@nestjs/common';
import { CreateRaiddDto } from './dto/create-raidd.dto';
import { UpdateRaiddDto } from './dto/update-raidd.dto';
import { Raidd } from './entities/raidd.entity';
import { Action } from 'src/action/entities/action.entity';
import { Contract } from 'src/contract/entities/contract.entity';
import { Project } from 'src/project/entities/project.entity';

@Injectable()
export class RaiddService {
  constructor(
    @Inject('RAIDD_REPOSITORY') private readonly raiddRepository: typeof Raidd,
    @Inject('ACTION_REPOSITORY')
    private readonly actionRepository: typeof Action,
    @Inject('CONTRACT_REPOSITORY')
    private readonly contractRepository: typeof Contract,
    @Inject('PROJECT_REPOSITORY')
    private readonly projectRepository: typeof Project,
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
      const sequelize = this.raiddRepository.sequelize;
      const raidd = await sequelize?.query(`
        select 

        r.id_contract as id_contract,
        pr.name as contract_number,
e.name as employee_name, r.cota as cota, c.customer_po as customer_po, c.client as client, c.usuario as usuario, r.tiempo_entrega as tiempo_entrega, r.duracion as duracion, r.inicio as inicio, r.id_raidd as id_raidd
from project as pr
inner join employee as e on pr.id_employee = e.id_employee
inner join contract as c on pr.id_contract = c.id_contract
inner join raidd as r on r.id_contract = c.id_contract;
      `);
      if (!raidd) {
        return new HttpException('No se encontraron raidd', 404);
      }
      return raidd[0];
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
      const raidd = await this.raiddRepository.findByPk(id);
      if (!raidd) {
        return new HttpException('Raidd no encontrado', 404);
      }

      await raidd.update({
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
