import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import { Product } from '../product.interface';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {
  products: Product[] = []

  constructor(private productService: ProductService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe(product => {this.products = product})
  }

  productdelete(id:any){
    console.log(id)
    this.productService.deleteProduct(id).subscribe(c=>{
      this.router.navigateByUrl('display');
    })
  }

}
