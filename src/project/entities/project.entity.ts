import {
  BelongsTo,
  Column,
  DataType,
  DeletedAt,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Contract } from 'src/contract/entities/contract.entity';
import { EmployeeProject } from 'src/employee-project/entities/employee-project.entity';
import { Employee } from 'src/employee/entities/employee.entity';
import { ProjectActivity } from 'src/project-activities/entities/project-activity.entity';

@Table({
  tableName: 'project',
  paranoid: true,
})
export class Project extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id_project: number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare name: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare description: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: 'PENDIENTE',
  })
  declare status: string;

  @HasMany(() => ProjectActivity)
  project_activities_many: ProjectActivity[];

  @HasMany(() => EmployeeProject)
  project_employees: EmployeeProject[];

  @ForeignKey(() => Employee)
  id_employee: number;

  @ForeignKey(() => Contract)
  id_contract: number;

  @BelongsTo(() => Contract)
  contract: Contract;

  @BelongsTo(() => Employee)
  employee: Employee;

  @DeletedAt
  declare deletedAt?: Date;
}
