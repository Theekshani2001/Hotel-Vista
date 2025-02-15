import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  animations:[
    trigger('leftSlider',[
      transition('void => *',[
        style({transform:'translateX(-100%)'}),
        animate('0.3s')
      ]),
      transition('* => void',[

        animate('0.3s',style({transform:'translateX(-100%)'}))
      ])
    ])




  ]
})
export class TopBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sliderState=false;
  toggleSlider() {

    //true==>false false==>true
    this.sliderState=!this.sliderState;
  }

}
