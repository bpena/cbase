import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRouter } from './auth.router';
import { LoginComponent } from './views/login/login.component';
import { MatButtonModule, MatCardModule, MatIconModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    AuthRouter,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule
  ],
  declarations: [AuthComponent, LoginComponent]
})
export class AuthModule { }
