import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Product } from './product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[]
  backend_url: String = "http://localhost:5000"

  headers = new HttpHeaders().set("Content-Type", "application/json").set("Accept", "application/json")

  constructor(private http: HttpClient) {
    this.products = []
   }

   getAllProduct() {
    return this.http.get<Product[]>(`${this.backend_url}/display`, {headers: this.headers})
  }

  getAllProductbyId(id:any) {
    return this.http.get<Product[]>(`${this.backend_url}/display/${id}`, {headers: this.headers})
  }

  addProduct(data: Product) {
    return this.http.post<any>(`${this.backend_url}/insert`, data, {headers: this.headers})
  }

  editProduct(id:any,data: Product) {
    return this.http.put<any>(`${this.backend_url}/update/${id}`, data, {headers: this.headers})
  }

  deleteProduct(id:any){
    return this.http.delete(`${this.backend_url}/delete/${id}`, {headers: this.headers})
  }
}
