import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];
  insertProduct(title: string, desc: string, price: number) {
    const id = Math.floor(Math.random() * Date.now()).toString(16);
    const newProduct = new Product(id, title, desc, price);
    this.products.push(newProduct);
    return id;
  }
  getProducts() {
    return [...this.products];
  }
  getProduct(prodId: string) {
    const [product] = this.findProduct(prodId);
    return { ...product };
  }
  findProduct(id: string): [Product, number] {
    const productIdx = this.products.findIndex((prod) => prod.id === id);
    if (productIdx == -1) {
      throw new NotFoundException('Product not found');
    }
    return [this.products[productIdx], productIdx];
  }
  updateProduct(
    id: string,
    productData: {
      title?: string;
      description?: string;
      price?: number;
    },
  ) {
    const [product, idx] = this.findProduct(id);
    const updatedProduct = {
      ...product,
      ...productData,
    };
    this.products[idx] = updatedProduct;
    return updatedProduct;
  }
  partialUpdate(
    id: string,
    productData: {
      title?: string;
      description?: string;
      price?: number;
    },
  ){
    const [product, idx] = this.findProduct(id);
    const updatedProduct = {
      ...product, 
      ...productData
    }
    this.products[idx] = updatedProduct;
    return updatedProduct
  };
  removeProduct(id: string) {
    const [_,prodId] = this.findProduct(id);
    this.products.splice(prodId,1);
  }
}
