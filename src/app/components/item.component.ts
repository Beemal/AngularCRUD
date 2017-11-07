import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'items',
  templateUrl: './item.component.html'
})
export class ItemsComponent implements OnInit {
    title: String;
  constructor(){}
  addItem(title: String){

  }
  ngOnInit(){}
}
