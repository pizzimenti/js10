import {Component, EventEmitter} from 'angular2/core';
import {Food} from './food.model';

@Component({
  selector: 'new-food',
  outputs: ['onSubmitNewFood'],
  template: `
    <div id=new-food-form>
      <h4>Add New Food:</h4>
      <h5>Name:</h5>
      <input placeholder="Broccoli with Kale" #name>
      <h5>Calories:</h5>
      <input placeholder="250" #calories>
      <h5>Description:</h5>
      <input placeholder="tired, full, still hungry, etc." #details>
      <button (click)="addFood(name, calories, details)">Add Food</button>
    </div>
  `
})
export class NewFoodComponent{
  public onSubmitNewFood: EventEmitter<any>;
  constructor() {
    this.onSubmitNewFood = new EventEmitter();
  }
  addFood(formName: HTMLInputElement, formCalories: HTMLInputElement, formDetails: HTMLInputElement) {
    var newFoodArray: any = [formName.value, parseInt(formCalories.value), formDetails.value];
    this.onSubmitNewFood.emit(newFoodArray);
    formName.value = "";
    formCalories.value = "";
    formDetails.value = "";
  }
}
