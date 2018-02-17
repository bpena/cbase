import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { MatButtonModule, MatIconModule, MatListModule, MatMenuModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { ContainerComponent } from './components/container/container.component';
import { LayoutModule as LModule } from '@angular/cdk/layout';
import { LayoutRouter } from '@layout/layout.router';
import { SidenavService } from '@layout/services/sidenav.service';
import { FooterComponent } from './components/footer/footer.component';
import { PruebaComponent } from './views/prueba/prueba.component';
import { LeftMenuComponent } from './components/menu/left-menu/left-menu.component';
import { RightMenuComponent } from './components/menu/right-menu/right-menu.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRouter,
    LModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule
  ],
  declarations: [
    LayoutComponent,
    DashboardComponent,
    HeaderComponent,
    ContainerComponent,
    FooterComponent,
    PruebaComponent,
    LeftMenuComponent,
    RightMenuComponent,
    UserProfileComponent
  ],
  providers: [
    SidenavService
  ]
})
export class LayoutModule { }
