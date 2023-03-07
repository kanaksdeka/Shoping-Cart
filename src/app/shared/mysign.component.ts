import { Component, Input, EventEmitter,Output, OnDestroy, OnInit, OnChanges } from "@angular/core";

@Component ({
    selector: "my-sign",
    template: `
    <h2>{{title}}</h2>
    <form>
        UserName: <input type="text" placeholder="Enter User Name" #txtUser><br>
        Password: <input type="password" placeholder="Enter Password" #txtPwd><br>
        <button class="btn btn-primary" type="button" 
            (click)="handleButtonClick(txtUser.value, txtPwd.value)">{{title}}</button>
    </form>
    `
})
export class MySignComponent implements OnDestroy, OnInit, OnChanges{
    @Input()
    title:string;

    @Output()
    myEvent = new EventEmitter()

    handleButtonClick(usr, pwd) {
        console.log("UserName: ", usr, " Password: ", pwd)
        this.myEvent.emit({usr, pwd})
    }

    constructor() {
        console.log("My Sign Constructor", this.title)
    }

    ngOnDestroy() {
        console.log("My Sign on Destroy")
    }

    ngOnInit() {
        console.log("My Sign on ngOnInit", this.title)
    }

    ngOnChanges() {
        console.log("My Sign on ngOnChanges")
    }
}