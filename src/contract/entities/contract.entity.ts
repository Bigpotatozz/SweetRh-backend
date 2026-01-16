import {
  Column,
  DataType,
  Table,
  Model,
  HasOne,
  HasMany,
  DeletedAt,
  AllowNull,
} from 'sequelize-typescript';
import { Project } from 'src/project/entities/project.entity';
import { Raidd } from 'src/raidd/entities/raidd.entity';

@Table({
  tableName: 'contract',
  paranoid: true,
})
export class Contract extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id_contract: number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  contract_number: string;
  @Column({
    type: DataType.DATE,
  })
  po_date: Date;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  client: string;
  @Column({
    type: DataType.STRING,
  })
  po2: string;
  @Column({
    type: DataType.STRING,
  })
  customer_po: string;
  @Column({
    type: DataType.STRING,
  })
  manufacter: string;
  @Column({
    type: DataType.STRING,
  })
  commodity: string;
  @Column({
    type: DataType.STRING,
  })
  supplier_counterpart: string;
  @Column({
    type: DataType.BOOLEAN,
  })
  po: boolean;
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  storage: boolean;
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  facturado: boolean;
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  deliveried: boolean;
  @Column({
    type: DataType.STRING,
  })
  status: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  usuario: string;
  @HasOne(() => Project)
  project: Project;

  @HasMany(() => Raidd)
  raidd: Raidd[];

  @DeletedAt
  declare deletedAt?: Date;
}
