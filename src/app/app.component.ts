import { Component } from '@angular/core';
import { CompoundId } from 'src/app/work/userpicker/CompoundId';
import { AnyResource } from 'src/app/home/resources/AnyResource';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angular-unit-testing!';
  mockId = ['1277@1290', 'USER@lukasz.panek+kd'];
  randomIntFromResource: number;

  constructor() {
  }

  startCompound(): void {
    let result = new CompoundId(this.mockId).getCompoundId();
  }
}
