import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mybutton',
  templateUrl: './mybutton.component.html',
  styleUrls: ['./mybutton.component.css']
})
export class MybuttonComponent{
  @Input() text:string;
  constructor() { }

}
