import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingredientAddedOutput = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem() {
    const ingredName = this.nameInputRef.nativeElement.value;
    const ingredAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingredName, ingredAmount);
    this.ingredientAddedOutput.emit(newIngredient);
  }

}
