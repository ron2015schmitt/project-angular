import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
  @Output() selectedRecipeOutput = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe({
      name: 'Fettucine',
      description: 'This is a dinner',
      imagePath: 'https://chefsmandala.com/wp-content/uploads/2018/02/Fettuccine-Pasta-Nest-Single-shutterstock_716026396.jpg'
    }),
    new Recipe({
      name: 'Apple Pie',
      description: 'This is a dessert',
      imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Small_apple_pie_8.jpg/1280px-Small_apple_pie_8.jpg'
    }),
  ];

  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe: Recipe) {
    this.selectedRecipeOutput.emit(recipe);
  }

}
