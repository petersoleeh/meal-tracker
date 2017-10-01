import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  template: `
    <h3>Add Food</h3>
    <div>
      <label>Food:</label>
      <input #newFood>
    </div>
    <div>
      <label>Calories:</label>
      <input #newCalories>
    </div>
    <div>
      <label>Details:</label>
      <input #newDetails>
      <button (click)="addClicked(newFood.value, newCalories.value, newDetails.value);
      newFood.value='';
      newCalories.value='';
      newDetails.value='';
      ">Add</button>
    </div>

  `
})

export class NewFoodComponent {
  @Output() newFoodSender = new EventEmitter();
  addClicked(food: string, calories: number, details: string) {
    var newFoodToAdd: Food = new Food(food, calories, details);
    this.newFoodSender.emit(newFoodToAdd);
  }

}
