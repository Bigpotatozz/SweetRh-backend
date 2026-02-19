import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeeProjectService } from './employee-project.service';
import { CreateEmployeeProjectDto } from './dto/create-employee-project.dto';
import { UpdateEmployeeProjectDto } from './dto/update-employee-project.dto';

@Controller('employee-project')
export class EmployeeProjectController {
  constructor(private readonly employeeProjectService: EmployeeProjectService) {}

  @Post()
  create(@Body() createEmployeeProjectDto: CreateEmployeeProjectDto) {
    return this.employeeProjectService.create(createEmployeeProjectDto);
  }

  @Get()
  findAll() {
    return this.employeeProjectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeProjectService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployeeProjectDto: UpdateEmployeeProjectDto) {
    return this.employeeProjectService.update(+id, updateEmployeeProjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeProjectService.remove(+id);
  }
}
