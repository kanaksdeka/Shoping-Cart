import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Category } from 'src/app/models/category.model';

@Injectable({providedIn: 'root'})
export class CategoryService {
    private restURL = "http://localhost:3000/wscategories"
    //private restURL = "http://localhost:3000/profile"
    constructor(private http:HttpClient) {}
    getCategories() {
        return this.http.get<Category[]>(this.restURL)
    }

    addCategory(newCategory:Category) {
        return this.http.post<Category>(this.restURL, newCategory)
    }

    deleteCategory(id:number) {
        return this.http.delete(this.restURL+"/"+id)
    }

    updateCategory(modifiedCtg:Category) {
        return this.http.put<Category>(this.restURL+"/"+modifiedCtg.id, modifiedCtg)
    }
}