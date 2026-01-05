import { PartialType } from '@nestjs/mapped-types';
import { CreateRaiddDto } from './create-raidd.dto';

export class UpdateRaiddDto extends PartialType(CreateRaiddDto) {}
