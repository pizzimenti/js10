import {Component} from 'angular2/core';
import {Food} from './food.model'

@Component({
  selector: 'food-display',
  inputs: ['food'],
  template: `
  <h3
    (click)="foodClicked(food)"
    [class.selected]="food"
  >{{food.name}}
  </h3>

  <div class="zippy">
    <div class="zippy__title" (click)="toggle()">
      <h4>{{ visible ? '&#x025BE;' : '&#x025B8;' }} Details</h4>
    </div>
    <div class="zippy__content" [hidden]="!visible">
      This is some content.
    </div>
  </div>

  `
})

export class FoodDisplayComponent {
  public food: Food;
  public visible: boolean;

  constructor() {
    this.visible = false;
  }
  foodClicked(clickedFood: Food): void {
    console.log("foodClicked method:", clickedFood);
  }
  toggle() {
    this.visible = !this.visible;
  }
}
