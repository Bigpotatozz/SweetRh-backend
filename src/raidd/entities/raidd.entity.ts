import {
  BelongsTo,
  Column,
  DataType,
  DeletedAt,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Contract } from 'src/contract/entities/contract.entity';

@Table({
  tableName: 'raidd',
  paranoid: true,
})
export class Raidd extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  })
  declare id_raidd: number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare cota: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare usuario: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare tiempo_entrega: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare duracion: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare inicio: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  @ForeignKey(() => Contract)
  id_contract: number;

  @BelongsTo(() => Contract)
  contract: Contract;

  @DeletedAt
  declare deletedAt?: Date;
}
