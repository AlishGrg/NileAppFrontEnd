import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {
  product:any;
  constructor(private prodService : ProductService) { }

  ngOnInit(): void {
    this.prodService.getAllProducts().subscribe(
      (data)=>{
        console.log(data);
        this.product = data;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
