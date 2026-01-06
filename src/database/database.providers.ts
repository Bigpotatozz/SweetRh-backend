import { Sequelize } from 'sequelize-typescript';
import * as dotenv from 'dotenv';
import { Activity } from 'src/activity/entities/activity.entity';
import { Contract } from 'src/contract/entities/contract.entity';
import { Employee } from 'src/employee/entities/employee.entity';
import { Project } from 'src/project/entities/project.entity';
import { ProjectActivity } from 'src/project-activities/entities/project-activity.entity';
import { Raidd } from 'src/raidd/entities/raidd.entity';
dotenv.config();

const credenciales = {
  host: process.env.HOST,
  port: parseInt(process.env.DBPORT as string, 10),
  username: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
};
export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: credenciales.host,
        port: credenciales.port,
        username: credenciales.username,
        password: credenciales.password,
        database: credenciales.database,
      });
      sequelize.addModels([
        Activity,
        Contract,
        Employee,
        Project,
        ProjectActivity,
        Raidd,
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
