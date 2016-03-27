import {Component} from 'angular2/core';
import {Food} from './food.model'

@Component({
  selector: 'food-display',
  inputs: ['food'],
  template: `
  <h3
    (click)="foodClicked(food)"
  >{{food.name}}</h3>
  `
})

export class FoodDisplayComponent {
  public food: Food;
  constructor() {}
  foodClicked(clickedFood: Food): void {
    console.log("foodClicked method:", clickedFood);
  }
}
