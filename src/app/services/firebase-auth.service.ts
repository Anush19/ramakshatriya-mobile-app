import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import * as auth from 'firebase/auth';
@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  constructor(private fireAuth: AngularFireAuth, public router: Router) { }

  firebaseSocialLogin(provider: any) {
    this.fireAuth.signInWithPopup(provider).then((res: any) => {
      console.log(res.user);
      if (res.user) {
        localStorage.setItem('user', JSON.stringify(res.user))
        this.router.navigate(['/tabs/home'])
      }
    })
  }
  googleLogin() {
    const provider = new auth.GoogleAuthProvider();
    return this.firebaseSocialLogin(provider);
  }
  getUser(){
    const users = localStorage.getItem('user');
    return JSON.parse(users)
  }
  logout() {
    this.fireAuth.signOut();
    localStorage.setItem('user', null);
    localStorage.removeItem('user');
    this.router.navigate(['/login'])
  }
}
