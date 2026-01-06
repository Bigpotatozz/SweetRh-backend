export class CreateContractDto {
  contract_number: string;
  po_date: Date;
  client: string;
  po2: string;
  customer_po: string;
  manufacter: string;
  commodity: string;
  supplier_counterpart: string;
  po: boolean;
  storage: boolean;
  facturado: boolean;
  deliveried: boolean;
  status: string;
}
