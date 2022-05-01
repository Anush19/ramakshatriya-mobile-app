import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
})
export class SlideComponent implements OnInit {

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: true,
  };

  constructor() { }

  ngOnInit() {}

}
