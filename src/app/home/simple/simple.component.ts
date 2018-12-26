import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleComponent implements OnInit {

  title: string;
  description: string;
  randomNumber: number;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  setTitle(title: string): void {
    this.title = title;
    this.changeDetectorRef.detectChanges();
  }

  setDescription(anyDescription: string): void {
    this.description = anyDescription;
    this.changeDetectorRef.detectChanges();
  }

  setRandomNumber(): void {
    this.randomNumber = this.getRandomInt();
    this.changeDetectorRef.detectChanges();
  }

  private getRandomInt() {
    let min = Math.ceil(1);
    let max = Math.floor(10000);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
