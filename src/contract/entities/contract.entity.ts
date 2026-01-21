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
  declare id_contract: number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare contract_number: string;
  @Column({
    type: DataType.DATE,
  })
  declare po_date: Date;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare client: string;
  @Column({
    type: DataType.STRING,
  })
  declare po2: string;
  @Column({
    type: DataType.STRING,
  })
  declare customer_po: string;
  @Column({
    type: DataType.STRING,
  })
  declare manufacter: string;
  @Column({
    type: DataType.STRING,
  })
  declare commodity: string;
  @Column({
    type: DataType.STRING,
  })
  declare supplier_counterpart: string;
  @Column({
    type: DataType.BOOLEAN,
  })
  declare po: boolean;
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  declare storage: boolean;
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  declare facturado: boolean;
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  declare deliveried: boolean;
  @Column({
    type: DataType.STRING,
  })
  declare status: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare usuario: string;
  @HasOne(() => Project)
  project: Project;

  @HasMany(() => Raidd)
  raidd: Raidd[];

  @DeletedAt
  declare deletedAt?: Date;
}
