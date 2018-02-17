import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth/services/auth.service';
import { Router } from '@angular/router';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loaded = false;
  photoUrl = '';

  constructor(private authService: AuthService,
              private router: Router,
              private sidenavService: SidenavService) { }

  ngOnInit() {
  }

  toggleLeftSidenav() {
    this.sidenavService.toggleLeftSidenav();
  }

  toggleRigthSidenav() {
    this.sidenavService.toggleRigthSidenav();
  }

  goTo(uri: string) {
    this.router.navigate([uri]);
  }

  logout() {
    this.authService.logout();
  }

  loadedImage() {
    this.loaded = true;
  }
}
