import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Raidd } from 'src/raidd/entities/raidd.entity';
import { Contract } from 'src/contract/entities/contract.entity';
import { Employee } from 'src/employee/entities/employee.entity';

@Table({
  tableName: 'action',
  paranoid: true,
})
export class Action extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  })
  declare id_action: number;

  @Column({
    type: DataType.STRING,
  })
  declare comentarios: string;

  @Column({
    type: DataType.DATE,
  })
  declare fecha_compromiso: Date;

  @Column({
    type: DataType.INTEGER,
  })
  @ForeignKey(() => Raidd)
  declare id_raidd: number;

  @Column({
    type: DataType.INTEGER,
  })
  @ForeignKey(() => Employee)
  declare id_employee: number;

  @BelongsTo(() => Raidd)
  raidd: Raidd;

  @BelongsTo(() => Employee)
  employee: Employee;
}
