import { HttpException, Inject, Injectable } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { Activity } from './entities/activity.entity';
import { Employee } from 'src/employee/entities/employee.entity';
import { ProjectActivity } from 'src/project-activities/entities/project-activity.entity';

@Injectable()
export class ActivityService {
  constructor(
    @Inject('ACTIVITY_REPOSITORY') private activityRepository: typeof Activity,
    @Inject('PROJECT_ACTIVITIES_REPOSITORY')
    private projectActivityRepository: typeof ProjectActivity,

    @Inject('EMPLOYEE_REPOSITORY') private employeeRepository: typeof Employee,
  ) {}

  async create(createActivityDto: CreateActivityDto) {
    try {
      const activity = await this.activityRepository.create({
        id_employee: createActivityDto.id_employee,
        name: createActivityDto.name,
        description: createActivityDto.description,
        start_date: createActivityDto.start_date,
        end_date: createActivityDto.end_date,
      });

      return activity;
    } catch (e) {
      console.log(e);
      return new HttpException('Error al registrar actividad', 500, {
        cause: e,
      });
    }
  }

  async findAll() {
    try {
      const activities = await this.activityRepository.findAll({
        include: [
          {
            model: Employee,
            as: 'employee',
            attributes: ['name'],
            paranoid: false,
          },
        ],
      });

      return { activities };
    } catch (e) {
      return new HttpException('Error al obtener actividades', 500, {
        cause: e,
      });
    }
  }

  async findOne(id: number) {
    try {
      const activity = await this.activityRepository.findByPk(id);
      if (!activity) {
        return new HttpException('Actividad no encontrada', 404);
      }
      return activity;
    } catch (e) {
      console.log(e);
      return new HttpException('Error al obtener actividad', 500, {
        cause: e,
      });
    }
  }

  async update(id: number, updateActivityDto: UpdateActivityDto) {
    console.log(updateActivityDto);
    try {
      const activity = await this.activityRepository.findByPk(id);

      if (!activity) {
        return new HttpException('Actividad no encontrada', 404);
      }

      if (
        updateActivityDto.name === undefined ||
        updateActivityDto.id_employee === undefined ||
        updateActivityDto.description === undefined ||
        updateActivityDto.start_date === undefined ||
        updateActivityDto.end_date === undefined
      ) {
        return new HttpException('Campos incompletos', 400);
      }

      activity.id_employee = updateActivityDto.id_employee;
      activity.name = updateActivityDto.name;
      activity.description = updateActivityDto.description;
      activity.start_date = updateActivityDto.start_date;
      activity.end_date = updateActivityDto.end_date;

      const updatedActivity = await activity.update(activity);
      return updatedActivity;
    } catch (e) {
      console.log(e);
      return new HttpException('Error al actualizar actividad', 500, {
        cause: e,
      });
    }
  }

  async remove(id: number) {
    try {
      const activity = await this.activityRepository.findByPk(id);

      if (!activity) {
        return new HttpException('Actividad no encontrada', 404);
      }

      const destroyedActivity = await activity.destroy();
      return destroyedActivity;
    } catch (e) {
      console.log(e);
      return new HttpException('Error al eliminar actividad', 500, {
        cause: e,
      });
    }
  }

  async getAllActivities() {
    try {
      const sequelize = this.activityRepository.sequelize;
      const query = `  SELECT 
			id_employee,
			id_activity,
            name,
            description,
            start_date,
            end_date,
            'normal' AS tipo  -- Columna extra para saber de qué tabla viene
        FROM activity 

        UNION ALL

        SELECT 
			id_employee,
			id_project_activity,
            name,
            description,
            start_date,
            end_date,
            'proyecto' AS tipo
        FROM project_activity;`;

      const actividades = await sequelize?.query(query);

      return actividades;
    } catch (e) {
      console.log(e);
      throw new HttpException('Error al obtener actividades', 500, {
        cause: e,
      });
    }
  }
}
