import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import { CategoryService } from '../shared/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styles: []
})
export class CategoryComponent implements OnInit {

  categories:Category[] = []
  frmCtg = new Category(null, null);
  constructor(private ctgsvc:CategoryService) { }

  ngOnInit() {
    this.ctgsvc.getCategories().subscribe(
      (data) => {
        this.categories = data
      }, (err) => {
        console.log("Error")
      }
    )
  }

  save() {
    if(this.frmCtg.id == undefined) {
      this.ctgsvc.addCategory(this.frmCtg).subscribe (
        (data) => {
          console.log("Add Success")
          this.categories.push(data)
          this.frmCtg = new Category(null, null)
        }, (err) => {
          console.log("Add Error", err)
        }
      )
    }
    else {
      this.ctgsvc.updateCategory(this.frmCtg).subscribe (
        (data) => {
          console.log("Update Success")
          let idx = this.categories.findIndex((e)=> e.id == data.id)
          this.categories[idx] = data;
          this.frmCtg = new Category(null, null)
        }, (err) => {
          console.log("Update Error", err)
        }
      )
    }

    
  }

  delete(id:number) {
    this.ctgsvc.deleteCategory(id).subscribe(
      (data)=> {
        console.log("Success Delete")
        let idx = this.categories.findIndex((e)=>e.id == id)
        this.categories.splice(idx, 1)
      }, (err) => {
        console.log("Error Delete")
      }
    )
  }

  edit(selectedCtg:Category) {
    //this.frmCtg = new Category(selectedCtg.id, selectedCtg.name)
    Object.assign(this.frmCtg, selectedCtg)
  }

}
