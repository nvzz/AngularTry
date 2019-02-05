import { Component, OnInit } from '@angular/core';
import { INames } from './list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title: string = 'FED Academy';
  
  constructor(){ }


  ngOnInit() : void { }
  
}
