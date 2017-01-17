import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map';



@Injectable()
export class PostService {
  private _postUrl: string = 'https://blog-api-app.herokuapp.com/v1/posts';

  constructor(private _http: Http){}

  // GET all post
  getAllPost(){
    // to do....  
    return this._http.get(this._postUrl)
      .map((resp: Response) => resp.json());
  }
 
}