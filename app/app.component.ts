import {Component} from 'angular2/core';
import {Food} from './food.model';
import {FoodListComponent} from './food-list.component';

@Component({
  selector: 'my-app',
  inputs: ['foodList'],
  directives: [FoodListComponent],
  template: `
  <div class="jumbotron text-center">
    <h1>Food Log</h1>
  </div>
  <div class="container">
    <food-list
      [foodList]="foods">
    </food-list>
  </div>
  `
})

export class AppComponent {
  public foods: Food[]; //same as Array<Food> (array of food objects)
  constructor() {
    this.foods = [
      new Food(0,"Double Half Pound Bacon Gorgonzola Cheeseburger",920,"Feeling tired after lunch"),
      new Food(1,"Salad Wrap", 147, "feeling light and energetic"),
      new Food(2,"Green Smoothie", 230, "still hungry but not tired")
    ];
  }
}
