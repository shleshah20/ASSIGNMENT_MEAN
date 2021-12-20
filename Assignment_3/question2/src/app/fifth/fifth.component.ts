import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-fifth',
  templateUrl: './fifth.component.html',
  styleUrls: ['./fifth.component.css']
})
export class FifthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myForm = new FormGroup({
    name: new FormControl("",[Validators.required]),
    address: new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required]),
    password: new FormControl("",[Validators.required])
  })

  value:boolean = false
  name:any
  address:any
  email:any
  password:any

  select(){
    this.value = true
    this.name = this.myForm.value.name
    this.address = this.myForm.value.address
    this.email = this.myForm.value.email
    this.password = this.myForm.value.password
  }

}
