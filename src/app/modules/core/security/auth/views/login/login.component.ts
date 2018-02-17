import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth/services/auth.service';
import { NavigationConstants } from '@shared/constants/navigation.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private static logged(that: any) {
    that.ngZone.run(() => that.router.navigateByUrl(NavigationConstants.START_PAGE));
  }

  private static processError(err: any) {
    console.log(err);
  }

  constructor(private authService: AuthService,
              private ngZone: NgZone,
              private router: Router) { }

  ngOnInit() {
  }

  signInWithTwitter() {
    this.authService.signInWithTwitter()
      .then(() => LoginComponent.logged(this))
      .catch(LoginComponent.processError);
  }

  signInWithFacebook() {
    this.authService.signInWithFacebook()
      .then(() => LoginComponent.logged(this))
      .catch(LoginComponent.processError);
  }

  signInWithGoogle() {
    this.authService.signInWithGoogle()
      .then(() => LoginComponent.logged(this))
      .catch(LoginComponent.processError);
  }

  signInWithGithub() {
    this.authService.signInWithGithub()
      .then(() => LoginComponent.logged(this))
      .catch(LoginComponent.processError);
  }
}
