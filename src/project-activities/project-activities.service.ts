import { Injectable } from '@nestjs/common';
import { CreateProjectActivityDto } from './dto/create-project-activity.dto';
import { UpdateProjectActivityDto } from './dto/update-project-activity.dto';

@Injectable()
export class ProjectActivitiesService {
  create(createProjectActivityDto: CreateProjectActivityDto) {
    return 'This action adds a new projectActivity';
  }

  findAll() {
    return `This action returns all projectActivities`;
  }

  findOne(id: number) {
    return `This action returns a #${id} projectActivity`;
  }

  update(id: number, updateProjectActivityDto: UpdateProjectActivityDto) {
    return `This action updates a #${id} projectActivity`;
  }

  remove(id: number) {
    return `This action removes a #${id} projectActivity`;
  }
}
