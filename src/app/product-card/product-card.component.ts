import { Component, OnInit } from '@angular/core';
import {ProductCardService} from './product-card.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  // cardList : Object[] = []
  // cardName : string; 
  products: Object[];
  counter: number = 0;
  max: number;
  // constructor(private productCardService: ProductCardService) { }

  ngOnInit() {
    this.products = [
      {name: "Nikon", description: "Описание к фотоапарату Никон", url: "http://desktopwallpapers.org.ua/large/201702/56308.jpg"},
      {name: "Текстура", description: "Описание к Текстуре", url: "http://desktopwallpapers.org.ua/large/201702/56309.jpg"},
      {name: "Архитектура", description: "Очень необычный дом", url: "http://desktopwallpapers.org.ua/large/201702/56311.jpg"},
      {name: "Природа", description: "Картина весны", url: "http://desktopwallpapers.org.ua/large/201702/56313.jpg"},
      {name: "Космос", description: "Обнаружена черная дыра", url: "http://desktopwallpapers.org.ua/large/201702/56314.jpg"}
    ]
    this.max = this.products.length-1;
        // this.cardName = "Matrix"
        // this.getCards();
  }

  // private getCards(){
  //   if(!this.cardName) {return;}
  //   this.productCardService.getCards(this.cardName).subscribe(data => {
  //     this.cardList = data;
  //   })
  // }

  next() {
    if(this.counter < this.max) {
      this.counter++;
    }
  }

  previous() {
    if(this.counter > 0) {
      this.counter--;
    }
  }

}
