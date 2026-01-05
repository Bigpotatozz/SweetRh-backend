import {
  BelongsTo,
  Column,
  ForeignKey,
  Table,
  Model,
  DataType,
} from 'sequelize-typescript';
import { Employee } from 'src/employee/entities/employee.entity';

@Table({
  tableName: 'activity',
})
export class Activity extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id_activity: number;
  @Column({
    type: DataType.STRING(50),
    allowNull: false,
  })
  name: string;
  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  description: string;

  @ForeignKey(() => Employee)
  @Column
  id_employee: number;

  @BelongsTo(() => Employee)
  employee: Employee;
}
