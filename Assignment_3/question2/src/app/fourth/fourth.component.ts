import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {

  selectedValue: any;

  constructor() { }

  ngOnInit(): void {
  }

  textbox: boolean = false;
  textarea: boolean = false;

  select() {

    if (this.selectedValue == "textbox") {
      this.textbox = true
      this.textarea = false
    }
    else {
      if (this.selectedValue == "textarea") {
        this.textbox = false
        this.textarea = true
      }
    }
  }

}
