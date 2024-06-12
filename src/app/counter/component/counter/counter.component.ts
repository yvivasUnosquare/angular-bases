import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>{{ counter }}</p>
    <button (click)="increasedBy()">+1</button>
    <button (click)="decreasedBy()">-1</button>
    <hr />
    <button (click)="this.modifyValue(+1)">plus 1</button>
    <button (click)="this.modifyValue(-1)">minus 1</button>
    <button (click)="this.resetValue()">Reset</button>
  `,
})
export class CounterComponent {
  constructor() {}

  public static DEFAULT_VAL: number = 6;
  public counter: number = CounterComponent.DEFAULT_VAL;

  public increasedBy(): void {
    this.counter += 1;
  }
  decreasedBy(): void {
    this.counter -= 1;
  }

  public modifyValue(data: number): void {
    this.counter += data;
  }

  resetValue(): void {
    this.counter = CounterComponent.DEFAULT_VAL;
  }
}
