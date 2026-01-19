import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProjectActivitiesService } from './project-activities.service';
import { CreateProjectActivityDto } from './dto/create-project-activity.dto';
import { UpdateProjectActivityDto } from './dto/update-project-activity.dto';

@Controller('projectActivities')
export class ProjectActivitiesController {
  constructor(
    private readonly projectActivitiesService: ProjectActivitiesService,
  ) {}

  @Post('/create')
  create(@Body() createProjectActivityDto: CreateProjectActivityDto) {
    return this.projectActivitiesService.create(createProjectActivityDto);
  }

  @Get()
  findAll() {
    return this.projectActivitiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectActivitiesService.findOne(+id);
  }

  @Patch('/update/:id')
  update(
    @Param('id') id: string,
    @Body() updateProjectActivityDto: UpdateProjectActivityDto,
  ) {
    return this.projectActivitiesService.update(+id, updateProjectActivityDto);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.projectActivitiesService.remove(+id);
  }
}
