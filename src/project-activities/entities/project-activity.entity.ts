import {
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
  paranoid: true,
})
export class ProjectActivity extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id_project_activity: number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
  @Column({
    type: DataType.STRING,
  })
  description: string;
  @Column({
    type: DataType.DATE,
  })
  start_date: Date;
  @Column({
    type: DataType.DATE,
  })
  end_date: Date;
  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: 'PENDIENTE',
  })
  status: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  @ForeignKey(() => Employee)
  id_employee: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  @ForeignKey(() => Project)
  id_project_fk: number;

  @BelongsTo(() => Employee)
  employee: Employee;

  @BelongsTo(() => Project)
  project: Project;

  @DeletedAt
  declare deletedAt?: Date;
}
