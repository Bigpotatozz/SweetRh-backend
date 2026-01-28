import { Column, DataType, Table } from 'sequelize-typescript';

@Table({
  tableName: 'action',
  paranoid: true,
})
export class Action {
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
  declare acciones: string;
  @Column({
    type: DataType.DATE,
  })
  declare fecha_compromiso: Date;
  @Column({
    type: DataType.STRING,
  })
  declare comentarios: string;

  @Column({
    type: DataType.INTEGER,
  })
  declare id_raidd: number;
  declare id_employee: number;
}
