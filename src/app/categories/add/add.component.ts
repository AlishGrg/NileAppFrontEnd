import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  product:Product;
  constructor(private prodService: ProductService) {
    this.product = new Product();
   }

  ngOnInit(): void {
  }
  onSubmit(productForm : any){
    console.log(productForm.value);
    this.product = productForm.value;
    this.prodService.addProduct(this.product).subscribe(
      (data)=>{
        console.log(data);
        if(data) alert("Product Added Successfully");
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
