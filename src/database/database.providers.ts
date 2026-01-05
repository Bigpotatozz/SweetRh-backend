import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
dotenv.config();

const credenciales = {
  host: process.env.HOST,
  port: parseInt(process.env.PORT as string, 10),
  username: process.env.USERNAME,
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
      sequelize.addModels([]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
