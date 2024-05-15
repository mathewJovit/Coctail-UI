import { Component } from '@angular/core';
import { CocktailService } from './cocktail.service';
import { Cocktail } from './cocktail.model';

@Component({
  selector: 'app-cocktail-search',
  templateUrl: './cocktail-search.component.html',
  styleUrls: ['./cocktail-search.component.css']
})
export class CocktailSearchComponent {
  searchQuery: string = '';

  constructor(private cocktailService: CocktailService) { }

  cocktails: Cocktail[] = [];
  selectedCocktail: Cocktail | null = null;
  filteredCocktails: any;

  async searchCocktails() {
    this.cocktails = await this.cocktailService.getCocktails(this.searchQuery);
    this.filteredCocktails = this.cocktails;
    this.selectedCocktail = null; 
  }

  showCocktailDetails(cocktail: Cocktail) {
    this.selectedCocktail = cocktail;
    this.filteredCocktails=null;
  }
}
