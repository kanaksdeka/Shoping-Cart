export class Product {
    //Define and Initialize Data Mambers
    constructor(public id:number, public name:string, 
        public price:number, public description:string, public ctgid:number) {}

}

/*
    //1. Define data members
    public id:number
    public name:string
    public price:number
    public description:string

    //2. Initialize Data Members
    constructor(id:number, name:string, price:number, description:string) {
        this.id = id
        this.name = name
        this.price = price
        this.description = description
    }
*/