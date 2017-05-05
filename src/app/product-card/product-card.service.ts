import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class ProductCardService {
  url: string = "http://www.omdbapi.com/?page=1&s="
  constructor(private http: Http) { }
  // constructor() { }

    private extractData(res: Response) {
    let body = res.json();
    return body.Search || {};
  }

  getCards (cardName: string) {
    return this.http.get(this.url + cardName).map(this.extractData);
  }

}
