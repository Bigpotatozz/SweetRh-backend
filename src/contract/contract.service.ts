import { HttpException, Inject, Injectable } from '@nestjs/common';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';
import { Contract } from './entities/contract.entity';

@Injectable()
export class ContractService {
  constructor(
    @Inject('CONTRACT_REPOSITORY')
    private readonly contractRepository: typeof Contract,
  ) {}

  async create(createContractDto: CreateContractDto) {
    try {
      const contract = await this.contractRepository.create({
        contract_number: createContractDto.contract_number,
        po_date: createContractDto.po_date,
        client: createContractDto.client,
        po2: createContractDto.po2,
        customer_po: createContractDto.customer_po,
        manufacter: createContractDto.manufacter,
        commodity: createContractDto.commodity,
        supplier_counterpart: createContractDto.supplier_counterpart,
        po: createContractDto.po,
        storage: createContractDto.storage,
        facturado: createContractDto.facturado,
        deliveried: createContractDto.deliveried,
        status: createContractDto.status,
      });

      return contract;
    } catch (e) {
      console.log(e);
      return new HttpException('Error al registrar contrato', 500, {
        cause: e,
      });
    }
  }

  async findAll() {
    try {
      const contracts = await this.contractRepository.findAll();

      if (contracts.length <= 0) {
        return new HttpException('No hay contratos registrados', 404);
      }
      return contracts;
    } catch (e) {
      console.log(e);
      return new HttpException('Error al registrar actividad', 500, {
        cause: e,
      });
    }
  }

  async findOne(id: number) {
    try {
      const contract = await this.contractRepository.findByPk(id);
      if (!contract) {
        return new HttpException('Contrato no encontrado', 404);
      }

      return contract;
    } catch (e) {
      console.log(e);
      return new HttpException('Error al registrar actividad', 500, {
        cause: e,
      });
    }
  }

  //Probably this won´t be used in production
  async update(id: number, updateContractDto: UpdateContractDto) {
    try {
      console.log('UPDATEEEEE');
      const contract = await this.contractRepository.findByPk(id);

      if (!contract) {
        return new HttpException('Contrato no encontrado', 404);
      }

      if (
        updateContractDto.contract_number === undefined ||
        updateContractDto.po_date === undefined ||
        updateContractDto.client === undefined ||
        updateContractDto.po2 === undefined ||
        updateContractDto.customer_po === undefined ||
        updateContractDto.manufacter === undefined ||
        updateContractDto.commodity === undefined ||
        updateContractDto.supplier_counterpart === undefined ||
        updateContractDto.po === undefined ||
        updateContractDto.storage === undefined ||
        updateContractDto.facturado === undefined ||
        updateContractDto.deliveried === undefined ||
        updateContractDto.status == undefined
      ) {
        return new HttpException('Campos incompletos', 400);
      }

      contract.contract_number = updateContractDto.contract_number;
      contract.po_date = updateContractDto.po_date;
      contract.client = updateContractDto.client;
      contract.po2 = updateContractDto.po2;
      contract.customer_po = updateContractDto.customer_po;
      contract.manufacter = updateContractDto.manufacter;
      contract.commodity = updateContractDto.commodity;
      contract.supplier_counterpart = updateContractDto.supplier_counterpart;
      contract.po = updateContractDto.po;
      contract.storage = updateContractDto.storage;
      contract.facturado = updateContractDto.facturado;
      contract.deliveried = updateContractDto.deliveried;
      contract.status = updateContractDto.status;

      const updatedContract = await contract.update(contract);
      return updatedContract;
    } catch (e) {
      console.log(e);
      return new HttpException('Error al registrar actividad', 500, {
        cause: e,
      });
    }
  }

  async remove(id: number) {
    try {
      const contract = await this.contractRepository.findByPk(id);

      if (!contract) {
        return new HttpException('Contrato no encontrado', 404);
      }

      const deletedContract = await contract.destroy();

      return deletedContract;
    } catch (e) {
      console.log(e);
      return new HttpException('Error al registrar actividad', 500, {
        cause: e,
      });
    }
  }
}
