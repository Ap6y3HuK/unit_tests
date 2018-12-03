import { Component, OnInit } from '@angular/core';
import { AnyResource } from 'src/app/home/resources/AnyResource';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  randomIntFromResource: number;

  constructor(private anyResource: AnyResource) {
    this.randomIntFromResource = anyResource.randomInt;
  }

  ngOnInit() {
  }

}
