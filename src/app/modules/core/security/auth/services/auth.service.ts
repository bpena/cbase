import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { NavigationConstants } from '@shared/constants/navigation.constants';
import { UserService } from '@core/security/user/services/user.service';
import { User } from '@core/security/user/commons/models/user';

@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(private firebaseAuth: AngularFireAuth,
              private router: Router,
              private userService: UserService) {
    this.user = firebaseAuth.authState;
    this.user.subscribe(user => {
      this.userDetails = user ? user : null;
      const _user = new User();
      _user.set(this.userDetails);
      this.userService.setUser(_user);
    });
  }

  signInWithTwitter() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.TwitterAuthProvider()
    );
  }

  signInWithFacebook() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    );
  }

  signInWithGoogle() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  signInWithGithub() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GithubAuthProvider()
    );
  }

  isLoggedIn() {
    return this.userDetails != null;
  }

  logout() {
    this.firebaseAuth.auth.signOut()
      .then(() => this.router.navigate([NavigationConstants.LOGIN_PAGE]));
  }
}
