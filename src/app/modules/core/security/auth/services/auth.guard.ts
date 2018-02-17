import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { NavigationConstants } from '@shared/constants/navigation.constants';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router,
              private authService: AuthService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if  ( this.authService.isLoggedIn() ) {
      return true;
    }

    this.router.navigate([NavigationConstants.LOGIN_PAGE]);
    return false;
  }
}
