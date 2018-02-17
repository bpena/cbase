import { Injectable } from '@angular/core';
import { User } from '../commons/models/user';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {
  private user: User;
  private user$: BehaviorSubject<User>;

  constructor() {
    this.user = null;
    this.user$ = new BehaviorSubject(this.user);
  }

  validateUser(username: string, password: string) {

  }

  getUser(): BehaviorSubject<User> {
    return this.user$;
  }

  setUser(user: User) {
    this.user = user;
    this.user$.next(this.user);
  }
}
