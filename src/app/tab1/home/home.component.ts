import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {}

  news(){
    this.router.navigate(['/tabs/tab1/news']);
  }

  demise(){
    this.router.navigate(['/tabs/tab1/demise']);
  }

  communities(){
    this.router.navigate(['/tabs/tab1/communities']);
  }

  knowYourCommunity(){
    this.router.navigate(['/tabs/tab1/knowYourCommunity']);
  }



}
