import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroNames: string[] = ['Ironman', 'Hulk', 'Cap America', 'Spiderman'];
  public deletedHero?: string = '';

  public removeLastHero() {
    this.deletedHero = this.heroNames.pop();
  }
}
