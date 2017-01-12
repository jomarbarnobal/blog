import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'session-link',
  templateUrl: './user-link.component.html',
  styles: [`
    p a:hover {
      text-decoration: underline;
    }
  `]
})

export class UserSessionLink {
  
  // @Input() case: string;

  constructor(private _links: Router ){}

}