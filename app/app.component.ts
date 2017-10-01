import { Component } from '@angular/core';
import { Food } from './food.model';
@Component({
  selector: 'my-app',
  template: `
  <div class="jumbotron">
    <h1>The  Meal Tracker!</h1>
  </div>
  <div class="container">
    <div class="row">
  <div class="col-md-8">
  <div class="food-list">
    <food-list
    [childFoodList]="foods"
    (clickSender)="showDetails($event)"

    ></food-list>
  </div>
  <ol class="food">
    <li *ngFor="let currentFood of foods" >
      <p>Name: {{currentFood.name}}</p>
      <p>Calories: {{currentFood.calories}}</p>
      <p>Details: {{currentFood.details}}</p>
      <button (click)="showDetails(currentFood)" class="btn btn-primary">Edit</button>
    </li>
  </ol>
  </div>
  
    <div class="col-md-4">
    <new-food
      (newFoodSender)="addFood($event)"
    ></new-food>

    <div class="edit">
      <edit-food
      [childSelectedFood]="selectedFood"
      (doneClickedSender)="finishedEditing()"
      ></edit-food>
    </div>
    </div>
    </div>
    </div>

  `
})

export class AppComponent {
  public foods: Food[] = [
    new Food("Hot Dog", 137, "Some how dry."),
    new Food("Potato chips", 221, "I really like them well DRAINED!!"),
    new Food("Chicken Sandwich", 660, "Overall Tasty"),
    new Food("Vanilla Soft Ice-Cream", 140, "I can deal with such calories all day!"),
    new Food("Bacon,eggs and cheese", 340, "Greasy to say the least"),
    new Food("Pepperoni Pizza", 310, "Wooooooh!!! such huge calories from a single triangle"),
  ];
  selectedFood: Food = null;
  showDetails(clickedFood: Food) {
    this.selectedFood = clickedFood;
  }
  finishedEditing() {
    this.selectedFood = null;
  }
  addFood(newFoodFromChild: Food) {
    this.foods.push(newFoodFromChild);
  }

}
