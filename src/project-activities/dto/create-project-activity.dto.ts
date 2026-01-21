export class CreateProjectActivityDto {
  id_project_activity?: number;
  name: string;
  description: string;
  start_date: Date;
  end_date: Date;
  status: string;
  id_employee: number;
  id_project: number;
}
