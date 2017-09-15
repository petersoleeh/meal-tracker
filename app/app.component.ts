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
  <h3>My list of food</h3>
    <div class="food" *ngFor="let food of foods" >
      <p>Name: {{food.name}}</p>
      <p>Calories: {{food.calories}}</p>
      <p>Details: {{food.details}}</p>
    </div>
    </div>

    <div class="col-md-4">
    <h3>Add Food</h3>
    </div>
    </div>
    </div>
  `
})

export class AppComponent {
  foods: Food[] = [
    new Food("Hot Dog", 137, "Some how dry."),
    new Food("Potato chips", 221, "I really like them well DRAINED!!"),
    new Food("Chicken Sandwich", 660, "Overall Tasty"),
    new Food("Vanilla Soft Ice-Cream", 140, "I can deal with such calories all day!"),
    new Food("Bacon,eggs and cheese", 340, "Greasy to say the least"),
    new Food("Pepperoni Pizza", 310, "Wooooooh!!! such huge calories from a single triangle"),
  ];

}
