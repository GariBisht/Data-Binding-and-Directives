import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-some-directive',
  templateUrl: './some-directive.component.html',
  styleUrls: ['./some-directive.component.css']
})
export class SomeDirectiveComponent implements OnInit {

  isApproved = false;
  numbers = [
    'One',
    'Two',
    'Three',
    'Four',
    'Five'
  ];

  luckyNumber = 0;
  approve(status){
    this.isApproved = status;
 
   }
  constructor() { }

  ngOnInit(): void {
  }

}
