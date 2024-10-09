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
import { CreateNinjaDto } from './dto/create-ninja.dto';

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjasService: NinjasService) {}
  @Get()
  getNinjas(@Query('weapon') weapon: 'nunchucks' | 'stars') {
    return this.ninjasService.getWeapon(weapon);
  }
  @Get(':id')
  getNinja(@Param('id') id: number, @Body() updateNinjaDto: UpdateNinjaDto) { 
    return this.ninjasService.getNinja(+id, updateNinjaDto);
  }

  @Post()
  postNinja(@Body() createNinjaDto:CreateNinjaDto) {
   return this.ninjasService.postNinjas(createNinjaDto)
  }

  @Patch('/:id')
  updateNinja(@Param('id') id:number,@Body() updateNinjaDto:UpdateNinjaDto) {
  return this.ninjasService.updateNinja(id,updateNinjaDto)
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
