import { HttpException, Inject, Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @Inject('EMPLOYEE_REPOSITORY')
    private employeeRepository: typeof Employee,
  ) {}
  //Register new employee
  async create(createEmployeeDto: CreateEmployeeDto) {
    try {
      const employee = await this.employeeRepository.create({
        name: createEmployeeDto.name.toUpperCase(),
        position: createEmployeeDto.position.toUpperCase(),
      });

      return employee;
    } catch (e) {
      return new HttpException('Error al crear empleado', 500, {
        cause: e,
      });
    }
  }

  //List of all employees
  async findAll() {
    try {
      const employees = await this.employeeRepository.findAll();
      return employees;
    } catch (e) {
      return new HttpException('Error al listar empleados', 500, {
        cause: e,
      });
    }
  }

  async findOne(id: number) {
    try {
      const employee = await this.employeeRepository.findByPk(id);
      return employee;
    } catch (e) {
      return new HttpException('Error al listar empleados', 500, {
        cause: e,
      });
    }
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    try {
      const employee = await this.employeeRepository.findByPk(id);
      if (!employee) {
        return new HttpException('Empleado no encontrado', 404);
      }

      if (
        updateEmployeeDto.name === undefined ||
        updateEmployeeDto.position === undefined
      ) {
        return new HttpException('Datos incompletos', 400);
      }

      const updatedEmployee = await employee.update({
        name: updateEmployeeDto.name.toUpperCase(),
        position: updateEmployeeDto.position.toUpperCase(),
      });

      return updatedEmployee;
    } catch (e) {
      return new HttpException('Error al actualizar empleado', 500, {
        cause: e,
      });
    }
  }

  async remove(id: number) {
    try {
      const employee = await this.employeeRepository.findByPk(id);

      if (!employee) {
        return new HttpException('Empleado no encontrado', 404);
      }

      employee.destroy();
      return employee;
    } catch (e) {
      return new HttpException('Error al eliminar empleado', 500, {
        cause: e,
      });
    }
  }
}
