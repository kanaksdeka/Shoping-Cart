import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-signout',
  template: `
    <h2>You have loged out .....</h2>
  `,
  styles: []
})
export class SignoutComponent implements OnInit {

  constructor(private ls:LoginService) { }

  ngOnInit() {
    this.ls.setIsAdminLoggedIn(false)
  }

}
