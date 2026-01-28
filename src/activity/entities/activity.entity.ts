import {
  BelongsTo,
  Column,
  ForeignKey,
  Table,
  Model,
  DataType,
  DeletedAt,
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
  declare id_activity: number;
  @Column({
    type: DataType.STRING(50),
    allowNull: false,
  })
  declare name: string;
  @Column({
    type: DataType.STRING(100),
  })
  declare description: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  declare start_date: Date;
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  declare end_date: Date;

  @ForeignKey(() => Employee)
  @Column
  id_employee: number;

  @BelongsTo(() => Employee)
  employee: Employee;

  @DeletedAt
  declare deletedAt?: Date;
}
