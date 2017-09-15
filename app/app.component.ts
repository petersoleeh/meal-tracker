import { Component } from '@angular/core';
import { Food } from './food.model';
@Component({
  selector: 'my-app',
  template: `
  <div class="jumbotron">
    <h1>The  Meal Tracker!</h1>
  </div>
  <h3>My list of food</h3>
    <div class="food" *ngFor="let food of foods" >
      <p>{{food.name}}</p>
      <p>{{food.calories}}</p>
      <p>{{food.details}}</p>
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
