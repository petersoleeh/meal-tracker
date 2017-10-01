import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  template: `
    <h3>Add Food:</h3>
    <form>
    <div>
      <input placeholder="food" #newName>
    </div>
    <div>
      <input placeholder="Calories" #newCalories>
    </div>
    <div>
      <input placeholder='Details' #newDetails>
    </div>
    <button class="btn btn-primary" (click)="addClicked(newName.value, newCalories.value, newDetails.value);
    newName.value='';
    newCalories.value='';
    newDetails.value='';
    ">Add</button>
    </form>

  `
})

export class NewFoodComponent {
  @Output() newFoodSender = new EventEmitter();
  addClicked(name: string, calories: number, details: string) {
    var newFoodToAdd: Food = new Food(name, calories, details);
    this.newFoodSender.emit(newFoodToAdd);
  }

}
