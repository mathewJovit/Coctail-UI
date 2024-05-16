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
  loading: any;

  constructor(private cocktailService: CocktailService) { }

  cocktails: Cocktail[] = [];
  selectedCocktail: Cocktail | null = null;
  filteredCocktails: any;

  async searchCocktails() {
    this.loading=true;
    this.cocktails = await this.cocktailService.getCocktails(this.searchQuery);
    this.filteredCocktails = this.cocktails;
    this.selectedCocktail = null; 
    this.loading=false;
  }

  showCocktailDetails(cocktail: Cocktail) {
    this.selectedCocktail = cocktail;
  }
}
