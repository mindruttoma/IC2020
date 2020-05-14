import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccessoriesService {

  constructor() { }

  getAccessories() {
    return [
      
      {name: 'On Ear Wireless Bose', producer: 'Bose', description: 'Quiet Comfort 35 Argintiu, Bluetooth, NFC', price: '1.660', image: '4.jpg'},
      {name: 'Bluetooth Jabra Elite Active', producer: 'Jabra', description: '65t, In-Ear, Red', price: '724', image: '5.jpg'},
      {name: 'Profesionale Whizzer', producer: 'Techstar', description: 'Sunet 3D, Conectare Instant, Touch Control, IPX5 Waterproof, 20h Standby', price: '599', image: '6.jpg'},
      {name: 'Husa Galaxy A10S', producer: 'Samsung', description: 'Lilware, Canvas Z, Culoare Verde', price: '339', image: '1.jpg'},
      {name: 'Husa iPhone 11 Pro', producer: 'Apple', description: 'Clear Case', price: '301', image: '2.jpg'},
      {name: 'Husa P40, Qialino Smart', producer: 'Huawei', description: 'slim din piele naturala, smart cover, culoare Orange', price: '169', image: '3.jpg'},
     ];
  }
}
