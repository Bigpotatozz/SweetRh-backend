import { HttpException, Inject, Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './entities/project.entity';
import { Employee } from 'src/employee/entities/employee.entity';

@Injectable()
export class ProjectService {
  constructor(
    @Inject('PROJECT_REPOSITORY') private projectRepository: typeof Project,
  ) {}
  async create(createProjectDto: CreateProjectDto) {
    try {
      const project = await this.projectRepository.create({
        name: createProjectDto.name,
        description: createProjectDto.description,
        id_employee: createProjectDto.id_employee,
        id_contract: createProjectDto.id_contract,
      });

      return project;
    } catch (e) {
      console.log(e);
      return new HttpException('Error al crear el proyecto', 500);
    }
  }

  async findAll() {
    try {
      const projects = await this.projectRepository.findAll({
        include: [{ model: Employee, paranoid: false }],
      });

      if (projects.length === 0) {
        return new HttpException('No hay proyectos', 404);
      }

      return projects;
    } catch (e) {
      console.log(e);
      return new HttpException('Error al obtener los proyectos', 500);
    }
  }

  async findOne(id: number) {
    try {
      const project = await this.projectRepository.findByPk(id);

      if (!project) {
        return new HttpException('No existe el proyecto', 404);
      }

      return project;
    } catch (e) {
      console.log(e);
      return new HttpException('Error al obtener el proyecto', 500);
    }
  }

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    try {
      const project = await this.projectRepository.findByPk(id);

      if (!project) {
        return new HttpException('No existe el proyecto', 404);
      }

      if (
        updateProjectDto.name === undefined ||
        updateProjectDto.description === undefined ||
        updateProjectDto.id_employee === undefined ||
        updateProjectDto.id_contract === undefined
      ) {
        return new HttpException('Faltan datos', 400);
      }

      project.name = updateProjectDto.name;
      project.description = updateProjectDto.description;
      project.id_employee = updateProjectDto.id_employee;
      project.id_contract = updateProjectDto.id_contract;

      const updatedProject = await project.update(project);

      return updatedProject;
    } catch (e) {
      console.log(e);
      return new HttpException('Error al actualizar el proyecto', 500);
    }
  }

  async completeProject(id: number) {
    try {
      const project = await this.projectRepository.findByPk(id);
      if (!project) {
        return new HttpException('No existe el proyecto', 404);
      }

      const updatedProject = await project.update({ status: 'COMPLETED' });

      return updatedProject;
    } catch (e) {
      console.log(e);
      return new HttpException('Error al completar el proyecto', 500);
    }
  }
}
