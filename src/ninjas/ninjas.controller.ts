import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Query,
  Body,
  ValidationPipe,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { BeltGuard } from 'src/belt/belt.guard';

@Controller('ninjas')
@UseGuards(BeltGuard)
export class NinjasController {
  constructor(private readonly ninjasService: NinjasService) {}
  @Get()
  getNinjas(@Query('weapon') weapon: 'nunchucks' | 'stars') {
    return this.ninjasService.getWeapon(weapon);
  }
  @Get(':id')
  getNinja(@Param('id',ParseIntPipe) id: number) { 
    return this.ninjasService.getNinja(id);
  }

  @Post()
  postNinja(@Body(new ValidationPipe()) createNinjaDto:CreateNinjaDto) {
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
