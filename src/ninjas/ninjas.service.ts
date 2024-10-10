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

  getNinja(id: number) {
    const ninja = this.ninjas.filter((ninja) => ninja.id === id);
    if (!id) {
      throw new Error('error occured');
    }
    return ninja;
  }

  updateNinja(id: number, updateNinjaDto: UpdateNinjaDto) {
    this.ninjas = this.ninjas.map((ninja) => {
      if (ninja.id === id) {
        return { ...ninja, ...updateNinjaDto };
      }
      return ninja;
    });
  }

  postNinjas(Body: CreateNinjaDto) {
    const ninja = { ...Body, id: Date.now() };
    this.ninjas.push(ninja);
    return ninja;
  }

  deleteNinjas(id: number) {
    const ninja = this.ninjas.find((ninja) => ninja.id === id);
    return ninja;
  }
}
