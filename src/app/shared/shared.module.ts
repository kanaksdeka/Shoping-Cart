import { NgModule } from '@angular/core';
import { MySignComponent } from './mysign.component';
import { SearchDataPipe } from './searchdata.pipe';
import { HttpClientModule } from '@angular/common/http';


@NgModule ({
    declarations: [MySignComponent, SearchDataPipe],
    exports: [MySignComponent, SearchDataPipe],
    imports: [HttpClientModule]
})
export class SharedModule {
    constructor() {
        console.log("Shared Module Constructor")
    }
}