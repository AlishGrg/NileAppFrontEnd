import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:8088";
  constructor(private http : HttpClient) 
  { }

  getAllProducts(){
    return this.http.get(this.baseUrl+"/showProducts");
  }
  searchProductByName(name:string)
  {
    return this.http.get(this.baseUrl+"/VehicleByName/"+name);
  }
  addProduct(product:Product){
    return this.http.post(this.baseUrl+"/addProduct",product);
  }
}
