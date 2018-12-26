import { Injectable } from '@angular/core';

import { of as ObservableOf, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class AnyResource {

  randomInt: number;

  constructor() {
    this.randomInt = this.getRandomInt(300, 500);
  }

  getDataWithRandomDelay(): Observable<any> {
    return ObservableOf('Data fetched in unknown time')
      .pipe(
        delay(this.randomInt)
      );
  }

  getDataWithStableDelay(): Observable<any> {
    return ObservableOf('Data fetched in 2 sec')
      .pipe(
        delay(2000)
      );
  }

  private getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
