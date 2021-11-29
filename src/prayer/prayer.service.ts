import { Injectable } from '@nestjs/common';

import { Prayer } from './dto/prayer.dto';

@Injectable()
export class PrayerService {
  private readonly prayers: Prayer[] = [];

  Create(prayers: Prayer) {
    this.prayers.push(prayers);
  }

  getUsers() {
    return [...this.prayers];
  }
}
