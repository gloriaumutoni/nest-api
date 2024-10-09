import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NinjasService {
  private ninjas = [
    { id: 0, name: 'addb', weapon: 'nunchucks' },
    { id: 1, name: 'netninjas', weapon: 'stars' },
  ];

  getWeapon(weapon?: 'nunchucks' | 'stars') {
    if (weapon) return this.ninjas.filter((el) => el.weapon === weapon);
    return this.ninjas;
  }

  getNinja(id: number, updateNinjaDto:UpdateNinjaDto) {
    if (!id) {
return {...updateNinjaDto}
    }
    return this.ninjas.find((el) => el.id === id);
  }

  updateNinja(id: number, updateNinjaDto: UpdateNinjaDto) {
    const ninja = {
      ...updateNinjaDto,
      id:Date.now()
    };
    return this.ninjas.push(ninja);
  }

  postNinjas(Body: CreateNinjaDto) {
    return {...Body, id: Date.now()};
  }

  deleteNinjas(id: number) {
    if (id) return this.ninjas.filter((el) => el.id != id);
    return this.ninjas;
  }
}
