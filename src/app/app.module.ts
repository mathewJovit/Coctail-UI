import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CocktailSearchComponent } from './cocktail-search/cocktail-search.component';
import { CocktailService } from './cocktail-search/cocktail.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CocktailSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule    
  ],
  providers: [
    provideClientHydration(),
    CocktailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
