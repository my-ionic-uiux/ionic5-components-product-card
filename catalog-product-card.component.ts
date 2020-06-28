import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-catalog-product-card',
  templateUrl: './catalog-product-card.component.html',
  styleUrls: ['./catalog-product-card.component.scss'],
})
export class CatalogProductCardComponent implements OnInit {

  @Input() product;
  
  constructor() { }

  ngOnInit() {}

}
