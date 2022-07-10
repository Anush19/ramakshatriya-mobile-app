import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseAuthService } from 'src/app/services/firebase-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomeComponent implements OnInit {
  loggedInUser: any;

  constructor(
    private router: Router,
    private fireAuthService: FirebaseAuthService
  ) { }

  ngOnInit() { 
    this.loggedInUser = this.fireAuthService.getUser();
  }

  news() {
    this.router.navigate(['/tabs/hometab/news']);
  }

  demise() {
    this.router.navigate(['/tabs/hometab/demise']);
  }

  communities() {
    this.router.navigate(['/tabs/hometab/communities']);
  }

  knowYourCommunity() {
    this.router.navigate(['/tabs/hometab/knowYourCommunity']);
  }
  upload() {
    this.router.navigate(['/tabs/hometab/news']);
  }
  logoutAction() {
    this.fireAuthService.logout();
  }


}
