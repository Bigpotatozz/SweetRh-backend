import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RaiddService } from './raidd.service';
import { CreateRaiddDto } from './dto/create-raidd.dto';
import { UpdateRaiddDto } from './dto/update-raidd.dto';

@Controller('raidd')
export class RaiddController {
  constructor(private readonly raiddService: RaiddService) {}

  @Post('/createRaidd')
  create(@Body() createRaiddDto: CreateRaiddDto) {
    return this.raiddService.create(createRaiddDto);
  }

  @Get()
  findAll() {
    return this.raiddService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.raiddService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRaiddDto: UpdateRaiddDto) {
    return this.raiddService.update(+id, updateRaiddDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.raiddService.remove(+id);
  }
}
