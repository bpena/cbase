import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SidenavService {
  private leftSidenav: Subject<void>;
  private rigthSidenav: Subject<void>;

  constructor() {
    this.leftSidenav = new Subject<void>();
    this.rigthSidenav = new Subject<void>();
  }

  getLeftSidenav(): Observable<void> {
    return this.leftSidenav.asObservable();
  }

  toggleLeftSidenav() {
    this.leftSidenav.next();
  }

  getRigthSidenav(): Observable<void> {
    return this.rigthSidenav.asObservable();
  }

  toggleRigthSidenav() {
    this.rigthSidenav.next();
  }
}
