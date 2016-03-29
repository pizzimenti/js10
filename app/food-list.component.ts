import {Component} from 'angular2/core';
import {Food} from './food.model'
import {FoodDisplayComponent} from './food-display.component';
import {NewFoodComponent} from './new-food.component';
import {HealthyPipe} from './healthy.pipe';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  pipes: [HealthyPipe],
  directives: [FoodDisplayComponent, NewFoodComponent],
  templateUrl: 'app/food-list.component.html'
})

export class FoodListComponent {
  public foodList: Food[];
  public filterHealthy: string = "all";
  constructor() {}
  createFood(newFood: any): void {
    this.foodList.push(new Food (this.foodList.length, newFood[0], newFood[1], newFood[2]));
  }
  onChange(filterOption) {
    this.filterHealthy = filterOption;
  }
}
