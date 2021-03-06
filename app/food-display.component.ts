import {Component} from 'angular2/core';
import {Food} from './food.model'
import {EditFoodComponent} from './edit-food.component';

@Component({
  selector: 'food-display',
  inputs: ['food'],
  directives: [EditFoodComponent],
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
      <div class="row">
        <div class="col-md-6">
          <ul class="list-group ticketView">
            <li class="list-group-item ticketView">
              <span class="badge pull-left">Calories:</span>
              {{food.calories}}
            </li>
            <li class="list-group-item ticketView">
              <span class="badge pull-left">Details:</span>
              {{food.details}}
            </li>
          </ul>
          <edit-food [food]="food"></edit-food>
        </div>
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
