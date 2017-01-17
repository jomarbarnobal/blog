import { Component, OnInit } from '@angular/core';
import { Angular2TokenService} from 'angular2-token';
import { Observable } from 'rxjs/Rx'
import { PostService } from '../shared/posts/'

@Component({
  templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit {
    posts: Observable<any[]> ;

    constructor(
      private _angularService: Angular2TokenService,
      private _postService: PostService 
      ) {
      this._angularService.init({
        apiPath: 'https://jomarbarnobal.github.io/blog'
      })
      
      // GET /v1/posts
     
    }
     
    ngOnInit(){
      this.posts = this._postService.getAllPost();
    }
}
