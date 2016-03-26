import {Component} from 'angular2/core';
import {Food} from './food.model'

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  template: `
  <food-display *ngFor="#currentFood of foodList">
  </food-display>
  `
})

export class FoodListComponent {
  public foodList: Food[];
  constructor() {}
}
