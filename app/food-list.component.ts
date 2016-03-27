import {Component} from 'angular2/core';
import {Food} from './food.model'
import {FoodDisplayComponent} from './food-display.component';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  directives: [FoodDisplayComponent],
  template: `
  <food-display *ngFor="#currentFood of foodList" [food]="currentFood">
  </food-display>
  `
})

export class FoodListComponent {
  public foodList: Food[];
  constructor() {}
}
