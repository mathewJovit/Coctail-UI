import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, lastValueFrom, map } from 'rxjs';
import { Cocktail } from './cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  private apiUrl = 'http://localhost:8081/drinks/coctials/'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  async getCocktails(cocktailName: string): Promise<Cocktail[]> {
    try {
      const response = await lastValueFrom(this.http.get<{ drinks: Cocktail[] }>(this.apiUrl + cocktailName));
      console.log(response.drinks);
      return response.drinks || [];
    } catch (error) {
      console.error('Error fetching cocktails:', error);
      return []; // Return an empty array or handle the error as needed
    }
  }
}
