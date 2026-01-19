export class CreateProjectActivityDto {
  name: string;
  description: string;
  start_date: Date;
  end_date: Date;
  status: string;
  id_employee: number;
  id_project: number;
}
