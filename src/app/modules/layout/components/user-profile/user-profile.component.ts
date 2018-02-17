import { Component, OnInit } from '@angular/core';
import { UserService } from '@core/security/user/services/user.service';
import { AuthService } from '@auth/services/auth.service';
import { User } from '@core/security/user/commons/models/user';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user: User;

  constructor(private authService: AuthService,
              private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser()
      .subscribe(user => this.user = user);
  }

  logout() {
    this.authService.logout();
  }
}
