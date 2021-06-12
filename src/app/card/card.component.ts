import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public image:string;
  constructor() {
    this.image = '';
  }
  
  ngOnInit(): void {
    this.image = 'https://i.pinimg.com/236x/87/8f/71/878f71012e7ce67fabf2300b3e28277d.jpg'
    console.log("Esta vaina funciona");
  }

}
