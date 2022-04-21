import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  searchByName:string = "";
  price:any;
  constructor(private prodService : ProductService) {
   }
   //productPrice:string="";
  ngOnInit(): void {

    this.prodService.getAllProducts().subscribe(
      (data)=>{
        console.log(data)
        this.price = data;
        console.log(this.price);
      },
      (error)=>
      {
        console.log(error);
      }
    )



    // this.activeRoute.paramMap.subscribe(
    //   params => {
    //     this.productPrice = params.get("productPrice") as string;
    //     console.log(this.productPrice);
    //   }
    // )


    
    // this.prodService.getAllProducts().subscribe(
    //   (data)=>{
    //         console.log(data);
    //         this.product=data;
    //         console.log(this.product);
    //   },
    //   (error)=>
    //   {
    //       console.log(error);
    //   }
    // )
      

}
  
  searchByProductName(){
    console.log("search String: "+this.searchByName);
    this.prodService.searchProductByName(this.searchByName).subscribe(
      (data)=>{
        console.log(data);
      },
      (error)=>{
        console.log(error);
      }
    )
        
  }

}
