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
      console.log(id);
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

      const modifiedActivity = await actividad.update({
        name: updateProjectActivityDto.name,
        description: updateProjectActivityDto.description,
        start_date: updateProjectActivityDto.start_date,
        end_date: updateProjectActivityDto.end_date,
        status: updateProjectActivityDto.status,
        id_employee: updateProjectActivityDto.id_employee,
      });

      return modifiedActivity;
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

  async smartAddInteligentActivity(actividades: CreateProjectActivityDto[]) {
    try {
      for (const actividad of actividades) {
        if (actividad.id_project_activity) {
          console.log(actividad);
          const updatedActivity =
            await this.projectActivitiesRepository.findByPk(
              actividad.id_project_activity,
            );
          if (!updatedActivity) {
            throw new HttpException('No existe la actividad', 404);
          }

          await updatedActivity.update({
            name: actividad.name,
            description: actividad.description,
            start_date: actividad.start_date,
            end_date: actividad.end_date,
            status: actividad.status,
            id_employee: actividad.id_employee,
          });
        } else {
          const newActivity = await this.projectActivitiesRepository.create({
            name: actividad.name,
            description: actividad.description,
            start_date: actividad.start_date,
            end_date: actividad.end_date,
            status: actividad.status,
            id_employee: actividad.id_employee,
            id_project: actividad.id_project,
          });
        }
      }

      return 'Actividades agregadas correctamente';
    } catch (e) {
      console.log(e);
      throw new HttpException('Error al agregar actividad', 500, {
        cause: e,
      });
    }
  }

  async findActivitiesByProject(id_project: number) {
    try {
      const activities = await this.projectActivitiesRepository.findAll({
        where: {
          id_project: id_project,
        },
      });

      if (activities.length === 0) {
        return new HttpException('No hay actividades para este proyecto', 404);
      }
      return activities;
    } catch (e) {
      console.log(e);
      throw new HttpException('Error al obtener las actividades', 500, {
        cause: e,
      });
    }
  }
}
