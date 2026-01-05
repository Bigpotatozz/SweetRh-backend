import {
  BelongsTo,
  Column,
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
    type: 'INTEGER',
    autoIncrement: true,
    primaryKey: true,
  })
  id_project_activity: number;
  @Column({
    type: 'STRING',
    allowNull: false,
  })
  name: string;
  @Column({
    type: 'STRING',
    allowNull: false,
  })
  description: string;
  @Column({
    type: 'DATE',
    allowNull: false,
  })
  start_date: Date;
  @Column({
    type: 'DATE',
    allowNull: false,
  })
  end_date: Date;
  @Column({
    type: 'STRING',
    allowNull: false,
  })
  status: string;

  @Column({
    type: 'INTEGER',
    allowNull: false,
  })
  @ForeignKey(() => Employee)
  id_employee: number;

  @Column({
    type: 'INTEGER',
    allowNull: false,
  })
  @ForeignKey(() => Project)
  id_project: number;

  @BelongsTo(() => Employee)
  employee: Employee;

  @BelongsTo(() => Project)
  project: Project;
}
