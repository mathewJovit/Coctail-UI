export class Cocktail {
    strDrink: string;
    strDrinkAlternate: string;
    strTags: string;
    strCategory: string;
    strIBA: string;
    strAlcoholic: string;
    strGlass: string;
    strInstructions: string;
    strDrinkThumb: string;
  
    constructor(
      strDrink: string,
      strDrinkAlternate: string,
      strTags: string,
      strCategory: string,
      strIBA: string,
      strAlcoholic: string,
      strGlass: string,
      strInstructions: string,
      strDrinkThumb: string
    ) {
      this.strDrink = strDrink;
      this.strDrinkAlternate = strDrinkAlternate;
      this.strTags = strTags;
      this.strCategory = strCategory;
      this.strIBA = strIBA;
      this.strAlcoholic = strAlcoholic;
      this.strGlass = strGlass;
      this.strInstructions = strInstructions;
      this.strDrinkThumb = strDrinkThumb;
    }
  }
  