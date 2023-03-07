import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `
    <h1>Invalid Credentials. Try Again...</h1>
  `,
  styles: []
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
