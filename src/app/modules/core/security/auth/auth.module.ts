import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRouter } from './auth.router';
import { LoginComponent } from './views/login/login.component';
import { MatButtonModule, MatCardModule, MatIconModule, MatInputModule } from '@angular/material';
import { RegisterComponent } from './views/register/register.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    AuthRouter,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule
  ],
  declarations: [AuthComponent, LoginComponent, RegisterComponent]
})
export class AuthModule { }
