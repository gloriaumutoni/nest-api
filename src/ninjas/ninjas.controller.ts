import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Query,
  Body,
} from '@nestjs/common';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjasService: NinjasService) {}
  @Get()
  getNinjas(@Query('weapon') weapon: 'nunchucks' | 'stars') {
    return this.ninjasService.getWeapon(weapon);
  }
  @Get(':id')
  getNinja(@Param('id') id: number) { 
    return this.ninjasService.getNinja(+id)
  }

  @Post()
  postNinja() {
   return this.ninjasService.postNinjas()
  }

  @Patch('/:id')
  updateNinja(@Param('id') id:number,@Body() updateNinjaDto:UpdateNinjaDto) {
  return this.ninjasService.updateNinjas(id,updateNinjaDto)
  }

  @Delete()
  deleteNinjas() {
    return {};
  }

  @Delete(':id')
  deleteNinja(@Param('id') id: string) {
    return this.ninjasService.deleteNinjas(+id)
  }
}
