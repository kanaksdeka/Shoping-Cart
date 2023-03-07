import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'searchData'})
export class SearchDataPipe implements PipeTransform {
    transform(input:any[], searchVar:string, searchCol:string) {
        if(searchVar != "" && searchVar != undefined && searchCol != undefined) {
            return input.filter(e => e[searchCol].indexOf(searchVar) > -1)
        } else {
            return input;
        }
    }
}