import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  value=10
  name="Viral"
  date = new Date()

  constructor() { }

  ngOnInit(): void {
  }

}
