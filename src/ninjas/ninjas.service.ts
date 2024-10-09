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
    if (!id) {
      throw new Error('Id not found');
    }
    return this.ninjas.find((el) => el.id === id);
  }

  updateNinjas(id: number, updateNinjaDto: UpdateNinjaDto) {
    if (!id) {
      throw new Error('Id not found');
    }
    const ninja = {
      ...updateNinjaDto,
    };
    this.ninjas.push(ninja);
  }

  postNinjas() {
    return this.ninjas;
  }

  deleteNinjas(id: number) {
    if (id) return this.ninjas.filter((el) => el.id != id);
    return this.ninjas;
  }
}
