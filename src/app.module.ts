import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { EmployeeModule } from './employee/employee.module';
import { ActivityModule } from './activity/activity.module';
import { ContractModule } from './contract/contract.module';
import { ProjectModule } from './project/project.module';
import { ProjectActivitiesModule } from './project-activities/project-activities.module';
import { RaiddModule } from './raidd/raidd.module';

@Module({
  imports: [
    DatabaseModule,
    EmployeeModule,
    ActivityModule,
    ContractModule,
    ProjectModule,
    ProjectActivitiesModule,
    RaiddModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
