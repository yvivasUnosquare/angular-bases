import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;
  public work: string = 'Fly';

  get CapitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  public changeName(newName: string): void {
    this.name = newName;
  }

  public chageAge(newAge: number): void {
    this.age = newAge;
  }

  public reset(): void {
    this.name = 'ironman';
    this.age = 45;
  }
}
