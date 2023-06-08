import { ToastsService } from './../../../shared/services/toasts.service';
import { SpinnerService } from './../../../shared/services/spinner.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginDetails } from '../interfaces/LoginDetails';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private fireAuth: AngularFireAuth,
    private spinnerService: SpinnerService,
    private toastsService: ToastsService,
  ) { }

  // login with email and password
  async login(details: LoginDetails) {
    this.spinnerService.startLoading();
    this.fireAuth.signInWithEmailAndPassword(details.email, details.password)
    .then(async (result) => {
      const idToken = await result.user?.getIdToken();
      localStorage.setItem('idToken', idToken);
      localStorage.setItem('credential', JSON.stringify(details));
      this.spinnerService.stopLoading();
      this.router.navigate(['layout/dashboard'], { replaceUrl: true });
    })
    .catch(error => {
      console.error(error);
      this.spinnerService.stopLoading();
      this.toastsService.error('Incorrect username or password.')
    });
  }

  // auto login with email and password
  public initAutoLogin(user: LoginDetails) {
    if (user) this.login(user);
    else this.router.navigate(['/login'], { replaceUrl: true });
  }


  async logout() {
    await this.fireAuth.signOut();
    localStorage.clear();
    this.router.navigate(['/login'], { replaceUrl: true });
  }
}
