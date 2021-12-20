import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder,FormGroup,Validators} from '@angular/forms';
import {ActivatedRoute,Router} from '@angular/router'
import { ProductService } from '../product.service';
import { Product } from '../product.interface';

@Component({
  selector: 'app-product-insert',
  templateUrl: './product-insert.component.html',
  styleUrls: ['./product-insert.component.css']
})
export class ProductInsertComponent implements OnInit {

  constructor(private productService: ProductService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  myForm = new FormGroup({
    name: new FormControl("",[Validators.required]),
    price: new FormControl("",[Validators.required]),
    qty: new FormControl("",[Validators.required])
  })

  productAction() {
    
    this.productService.addProduct(this.myForm.value).subscribe(c => {
        this.router.navigateByUrl('display');
    })
  }
}
