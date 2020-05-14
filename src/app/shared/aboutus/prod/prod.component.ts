import { Component, OnInit, Attribute, Input } from '@angular/core';

@Component({
  selector: 'prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.css']
})
export class ProdComponent implements OnInit {
  @Input() name:string;
  @Input() description:string;
  @Input() image:string;
  @Input() producer:string;
  @Input() price:string;

  constructor(@Attribute('name')name:string, @Attribute("producer")producer:string, @Attribute('description')description:string, 
              @Attribute("price")price:string, @Attribute('image')image:string)
  {
    this.name=name;
    this.description=description;
    this.image=image;
    this.producer=producer;
    this.price=price;
  }

  ngOnInit(): void {
  }

}
