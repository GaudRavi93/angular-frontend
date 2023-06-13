import decode from 'jwt-decode';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginDetails } from '../interfaces/LoginDetails';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastsService } from './../../../shared/services/toasts.service';
import { SpinnerService } from './../../../shared/services/spinner.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private fireAuth: AngularFireAuth,
    private jwtHelper: JwtHelperService,
    private toastsService: ToastsService,
    private spinnerService: SpinnerService
  ) { }

  // check jwt token is expired or not
  public isAuthenticated(): boolean {
    try{
      const token = localStorage.getItem('idToken');
      const userId = localStorage.getItem('userId');
      const tokenPayload: any = decode(token);
      return !this.jwtHelper.isTokenExpired(token) && tokenPayload.user_id === userId;
    }catch (error){
      this.toastsService.error(error as string);
      console.error(error);
      this.logout();
      return false;
    }
  }

  // login with email and password
  async login(details: LoginDetails) {
    this.spinnerService.startLoading();
    this.fireAuth.signInWithEmailAndPassword(details.email, details.password)
    .then(async (result) => {
      const idToken = await result.user?.getIdToken();
      localStorage.setItem('userId', result.user.uid);
      localStorage.setItem('idToken', idToken);
      this.spinnerService.stopLoading();
      this.router.navigate(['/dashboard'], { replaceUrl: true });
    })
    .catch(error => {
      console.error(error);
      this.spinnerService.stopLoading();
      this.toastsService.error('Incorrect username or password.')
    });
  }

  async logout() {
    await this.fireAuth.signOut();
    localStorage.clear();
    this.router.navigate(['auth/login'], { replaceUrl: true });
  }
}
