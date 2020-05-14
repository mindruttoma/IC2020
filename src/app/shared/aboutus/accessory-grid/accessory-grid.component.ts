import { Component, OnInit } from '@angular/core';
import { AccessoriesService } from '../../../accessories.service';

@Component({
  selector: 'accessory-grid',
  templateUrl: './accessory-grid.component.html',
  styleUrls: ['./accessory-grid.component.css']
})
export class AccessoryGridComponent implements OnInit {
  accessories: {
    name:string, 
    producer:string, 
    description:string, 
    price:string,
    image:string
  } [];

  constructor(service: AccessoriesService) 
  { 
    this.accessories=service.getAccessories();
  }

  ngOnInit(): void {
  }

}
