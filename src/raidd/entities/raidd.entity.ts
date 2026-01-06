import {
  BelongsTo,
  Column,
  DataType,
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
  id_raidd: number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  cota: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  usuario: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  tiempo_entrega: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  duracion: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  inicio: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  @ForeignKey(() => Contract)
  id_contract: number;

  @BelongsTo(() => Contract)
  contract: Contract;
}
