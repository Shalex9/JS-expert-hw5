import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductCardService } from './product-card/product-card.service';
import { FilmCardComponent } from './film-card/film-card.component';
import { FilmCardService } from './film-card/film-card.service';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ProductCardComponent,
    FilmCardComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
          { path: '', component: FilmCardComponent },
          { path: 'product-card', component: ProductCardComponent },
          { path: 'film-card', component: FilmCardComponent },
    ])
  ],
  providers: [FilmCardService, ProductCardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
