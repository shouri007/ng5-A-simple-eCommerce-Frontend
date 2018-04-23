import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is simply a test', 'http://kusaka.co/wordpress/wp-content/uploads/2016/02/Avocado-Toast-Recipe-Step-by-Step-11.jpg'),
      new Recipe('A Test Recipe','This is simply a test', 'http://kusaka.co/wordpress/wp-content/uploads/2016/02/Avocado-Toast-Recipe-Step-by-Step-11.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
