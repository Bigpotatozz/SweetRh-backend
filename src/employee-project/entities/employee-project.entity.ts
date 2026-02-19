import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Employee } from 'src/employee/entities/employee.entity';
import { Project } from 'src/project/entities/project.entity';

@Table({
  tableName: 'employee_project',
  timestamps: false,
})
export class EmployeeProject extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare idEmployeeProject: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  @ForeignKey(() => Employee)
  declare idEmployee: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  @ForeignKey(() => Project)
  declare idProject: number;

  @BelongsTo(() => Employee)
  declare employee: Employee;

  @BelongsTo(() => Project)
  declare project: Project;
}
