import { Component } from '@angular/core';
import { Food } from './food.model';
@Component({
  selector: 'my-app',
  template: `
  <div class="jumbotron">
    <h1>The  Meal Tracker!</h1>
  </div>
  <h2>{{Food.Name}} Details</h2>
  <div><label>Calories:</label><h3>{{Food.calories}}</h3>
  <label>Details:</label><h4>{{Food.details}}</h4></div>
  <div>
    <label>Food Name: </label>
    <input [(ngModel)]="Food.Name" placeholder="food name">
  </div>
  `
})

export class AppComponent {
  public Food = {
    Name: "Hamberger",
    calories: 25325,
    details: "greasy",

  }


}
