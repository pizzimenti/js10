import {Component} from 'angular2/core';
import {Food} from './food.model'
import {FoodDisplayComponent} from './food-display.component';
import {NewFoodComponent} from './new-food.component';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  directives: [FoodDisplayComponent, NewFoodComponent],
  template: `
  <new-food (onSubmitNewFood)="createFood($event)"></new-food>
  <food-display *ngFor="#currentFood of foodList" [food]="currentFood">
  </food-display>
  `
})

export class FoodListComponent {
  public foodList: Food[];
  constructor() {}
  createFood(newFood: any): void {
    this.foodList.push(new Food (this.foodList.length, newFood[0], newFood[1], newFood[2]));
  }
}
