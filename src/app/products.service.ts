import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts() {
    return [
      {name: 'Galaxy S20 Ultra', producer: 'Samsung', description: 'Dual SIM, 128GB, 12GB RAM, 5G, Cosmic Black', price: '5.993', image: 'protein.jpg'},
      {name: 'Galaxy Note 10 Plus', producer: 'Samsung', description: 'Dual SIM, 256GB, 12GB RAM, Aura Black', price: '5.999', image: 'samsung2.jpg'},
      {name: 'Galaxy S10+', producer: 'Samsung', description: 'Dual SIM, 512GB, 8GB RAM, 4G, Green', price: '5.989', image: 'samsung3.jpg'},
      {name: 'iPhone 11 Pro Max', producer: 'Apple', description: '512GB, Midnight Green', price: '7.199', image: 'apple1.jpg'},
      {name: 'iPhone 11 Pro', producer: 'Apple', description: '64GB, Gold', price: '5.299', image: 'apple2.jpg'},
      {name: 'iPhone 11', producer: 'Apple', description: '256GB, Yellow', price: '4.999', image: 'apple3.jpg'},
      {name: 'P40 Pro', producer: 'Huawei', description: 'Dual SIM, 256GB, 8GB RAM, 5G, Black', price: '4.599', image: 'huawei1.jpg'},
      {name: 'Mate 20 X', producer: 'Huawei', description: '8+256GB, Dual SiM 5G, Green', price: '3.899', image: 'huawei2.jpg'},
      {name: 'P30 Pro', producer: 'Huawei', description: 'Dual SIM, 128GB, 6GB RAM, 4G, Amber Sunrise', price: '3.499', image: 'huawei3.jpg'},
    ];
  }
}
