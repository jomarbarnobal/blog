import { Component, Input, EventEmitter} from '@angular/core';
import { MaterializeAction } from 'angular2-materialize'
import { Angular2TokenService } from 'angular2-token';
@Component({
    selector: 'page-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
    constructor(private _tokenService: Angular2TokenService ){
        this._tokenService.init()
    }

      public drop: boolean = true;
    dropdownActions = new EventEmitter<string|MaterializeAction>();

    toggle() {
      this.drop = !this.drop;
      if (this.drop) {
        this.dropdownActions.emit({action:"dropdown",params:null});
      }
    }


    logOut(){
    this._tokenService.signOut().subscribe(
      res => console.log(res),
      error => console.log(error)
    )
    }
}
