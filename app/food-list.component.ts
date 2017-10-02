import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';
import { NewFoodComponent } from './new-food.component';
import { EditFoodComponent } from './edit-food.component';
import { CaloriesPipe } from './calories.pipe';

@Component({
  selector: 'food-list',
  template: `
  <h3>My List Of Food:</h3>
  <ol class="food">
    <li *ngFor="let currentFood of foods" >
      <p>Name: {{current.name}}</p>
      <p>Calories: {{currentFood.calories}}</p>
      <p>Details: {{currentFood.details}}</p>
    </li>

  </ol>
  `
})

export class FoodListComponent {
  @Input() childFoodList: Food[];
  @Output() clickSender = new EventEmitter();
  editButtonClicked(foodToEdit: Food) {
    this.clickSender.emit(foodToEdit);
  }
}
