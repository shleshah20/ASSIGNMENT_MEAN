import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder,FormGroup,Validators} from '@angular/forms';
import {ActivatedRoute,Router} from '@angular/router'
import { Product } from '../product.interface';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  constructor(private productService: ProductService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.productService.getAllProductbyId(params['id']).subscribe(c=>{
        console.log(c)
        this.myForm = new FormGroup({
          name: new FormControl(c[0].name,[Validators.required]),
          price: new FormControl(c[0].price,[Validators.required]),
          qty: new FormControl(c[0].qty,[Validators.required])
        })
      })
    })
  }

  myForm = new FormGroup({
    name: new FormControl("",[Validators.required]),
    price: new FormControl("",[Validators.required]),
    qty: new FormControl("",[Validators.required])
  })

  productUpdate() {
    this.route.params.subscribe(params=>{
      //console.log(params['id'],this.myForm.value)
      this.productService.editProduct(params['id'],this.myForm.value).subscribe(c => {
        this.router.navigateByUrl('display');
    }) 
    })
  }

}
