import {Component} from 'angular2/core';
import {Food} from './food.model';

@Component({
  selector: 'edit-food',
  inputs: ['food'],
  template: `

  <button class="btn-info" (click)="toggle()">Edit</button>

  <div id="edit-food-form" [hidden]="!visible">
    <h4>Edit Food:</h4>
    <h5>Name:</h5>
    <input [(ngModel)]="food.name"/>
    <h5>Calories:</h5>
    <input [(ngModel)]="food.calories"/>
    <h5>Details:</h5>
    <input [(ngModel)]="food.details"/>
  </div>

  `
})

export class EditFoodComponent {
  public food: Food;
  public visible: boolean;

  constructor() {
    this.visible = false;
  }
  toggle() {
    this.visible = !this.visible;
  }
}
