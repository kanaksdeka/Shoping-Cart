import { Injectable } from "@angular/core";
import { Product } from 'src/app/models/product.model';

@Injectable()
export class ProductService {
    private productsData:Product[] = []

    constructor() {
        this.productsData = [new Product(1, "Bravia", 56000, "Sony TV", 4),
        new Product(2, "Galaxy S", 13000, "Samsung MObile", 1),
        new Product(3, "iPhone X", 135000, "Apple Nex Gen Smart Phone", 1)]
    }

    getProducts() {
        return this.productsData;
    }
}