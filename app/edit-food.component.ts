import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  template: `
      <h3>Edit Food:</h3>
      <div *ngIf="childSelectedFood">
      <div>
        <label>Enter Food:</label>
        <input [(ngModel)]="childSelectedFood.name">
      </div>
      <div>
        <label>Enter Calories:</label>
        <input [(ngModel)]="childSelectedFood.calories" type="number">
      </div>

      <div>
        <label>Enter Details:</label>
        <input [(ngModel)]="childSelectedFood.details">
        <button (click)="doneClicked()" class="btn btn-info">Done</button>
      </div>
    </div>
  `
})
export class EditFoodComponent {
  @Input() childSelectedFood: Food;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
