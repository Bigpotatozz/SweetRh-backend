import { Column, HasMany, Table, Model, DataType } from 'sequelize-typescript';
import { Activity } from 'src/activity/entities/activity.entity';
import { ProjectActivity } from 'src/project-activities/entities/project-activity.entity';
import { Project } from 'src/project/entities/project.entity';

@Table({
  tableName: 'employee',
})
export class Employee extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id_employee: number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  position: string;

  @HasMany(() => Activity)
  activities: Activity[];

  @HasMany(() => Project)
  projects: Project[];

  @HasMany(() => ProjectActivity)
  project_activities: ProjectActivity[];
}
