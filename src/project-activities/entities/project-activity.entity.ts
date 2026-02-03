import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  DeletedAt,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Employee } from 'src/employee/entities/employee.entity';
import { Project } from 'src/project/entities/project.entity';

@Table({
  tableName: 'project_activity',
})
export class ProjectActivity extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id_project_activity: number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare name: string;
  @Column({
    type: DataType.STRING,
  })
  declare description: string;
  @Column({
    type: DataType.DATE,
  })
  declare start_date: Date;
  @Column({
    type: DataType.DATE,
  })
  declare end_date: Date;
  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: 'PENDIENTE',
  })
  declare status: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  @ForeignKey(() => Employee)
  declare id_employee: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  @ForeignKey(() => Project)
  declare id_project: number;

  @BelongsTo(() => Employee)
  employee: Employee;

  @BelongsTo(() => Project)
  project: Project;

  @DeletedAt
  declare deletedAt?: Date;
}
