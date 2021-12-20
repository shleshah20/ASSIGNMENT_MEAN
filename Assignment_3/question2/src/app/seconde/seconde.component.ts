import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seconde',
  templateUrl: './seconde.component.html',
  styleUrls: ['./seconde.component.css']
})
export class SecondeComponent implements OnInit {

  data = [
    {name:"Viral",address:"Althan"},
    {name:"Rohit",address:"Bamroli"},
    {name:"Asha",address:"Bhathina"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
