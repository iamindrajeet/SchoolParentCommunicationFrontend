import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  show: boolean = false;

  constructor() { }

  onClick(){
    this.show = !this.show; 
  }

  ngOnInit(): void {
  }

}
