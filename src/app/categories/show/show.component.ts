import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(private prodService : ProductService) { }
  product:any;
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
