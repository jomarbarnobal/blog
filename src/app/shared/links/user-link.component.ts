import { Component, Input } from '@angular/core';

@Component({
  selector: 'session-link',
  templateUrl: './user-link.component.html',
})

export class UserSessionLink {
  
  @Input() case: string;

}