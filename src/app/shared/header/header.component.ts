import { Component, Input} from '@angular/core';
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
}
