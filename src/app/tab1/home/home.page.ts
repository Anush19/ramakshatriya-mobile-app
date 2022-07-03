import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() { }

  news() {
    this.router.navigate(['/news']);
  }

  demise() {
    this.router.navigate(['/tabs/tab1/demise']);
  }

  communities() {
    this.router.navigate(['/tabs/tab1/communities']);
  }

  knowYourCommunity() {
    this.router.navigate(['/tabs/tab1/knowYourCommunity']);
  }



}
