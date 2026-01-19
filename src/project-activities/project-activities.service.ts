import { HttpException, Inject, Injectable } from '@nestjs/common';
import { CreateProjectActivityDto } from './dto/create-project-activity.dto';
import { UpdateProjectActivityDto } from './dto/update-project-activity.dto';
import { ProjectActivity } from './entities/project-activity.entity';

@Injectable()
export class ProjectActivitiesService {
  constructor(
    @Inject('PROJECT_ACTIVITIES_REPOSITORY')
    private projectActivitiesRepository: typeof ProjectActivity,
  ) {}
  async create(createProjectActivityDto: CreateProjectActivityDto) {
    try {
      const actividad = await this.projectActivitiesRepository.create({
        name: createProjectActivityDto.name,
        description: createProjectActivityDto.description,
        start_date: createProjectActivityDto.start_date,
        end_date: createProjectActivityDto.end_date,
        status: createProjectActivityDto.status,
        id_project: createProjectActivityDto.id_project,
        id_employee: createProjectActivityDto.id_employee,
      });

      return actividad;
    } catch (e) {
      console.log(e);

      return new HttpException('Error al registrar actividad', 500, {
        cause: e,
      });
    }
  }

  async findAll() {
    try {
      const actividades = await this.projectActivitiesRepository.findAll();

      return actividades;
    } catch (e) {
      console.log(e);

      return new HttpException('Error al obtener las actividades', 500, {
        cause: e,
      });
    }
  }

  async findOne(id: number) {
    try {
      const actividad = await this.projectActivitiesRepository.findByPk(id);

      return actividad;
    } catch (e) {
      console.log(e);
      return new HttpException('Error al obtener la actividad', 500, {
        cause: e,
      });
    }
  }

  async update(id: number, updateProjectActivityDto: UpdateProjectActivityDto) {
    try {
      const actividad = await this.projectActivitiesRepository.findByPk(id);

      if (!actividad) {
        return new HttpException('No existe la actividad', 404);
      }

      if (
        updateProjectActivityDto.name === undefined ||
        updateProjectActivityDto.description === undefined ||
        updateProjectActivityDto.start_date === undefined ||
        updateProjectActivityDto.end_date === undefined ||
        updateProjectActivityDto.status === undefined ||
        updateProjectActivityDto.id_employee === undefined
      ) {
        return new HttpException('Faltan datos', 400);
      }

      actividad.name = updateProjectActivityDto.name;
      actividad.description = updateProjectActivityDto.description;
      actividad.start_date = updateProjectActivityDto.start_date;
      actividad.end_date = updateProjectActivityDto.end_date;
      actividad.status = updateProjectActivityDto.status;
      actividad.id_employee = updateProjectActivityDto.id_employee;
    } catch (e) {
      console.log(e);
      return new HttpException('Error al actualizar la actividad', 500, {
        cause: e,
      });
    }
  }

  async remove(id: number) {
    try {
      const activdad = await this.projectActivitiesRepository.findByPk(id);

      if (!activdad) {
        return new HttpException('No existe la actividad', 404);
      }

      await activdad.destroy();

      return activdad;
    } catch (e) {
      console.log(e);
      return new HttpException('Error al eliminar la actividad', 500, {
        cause: e,
      });
    }
  }
}
