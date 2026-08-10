export class Product{
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public price: number,
  ){}
}

export class UpdateProductDto{
  constructor(
    public title: string, 
    public description: string, 
    public price: number
  ){}
}