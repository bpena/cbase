import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from '@auth/views/register/register.component';

const ROUTES: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  }
];

export const AuthRouter = RouterModule.forChild(ROUTES);
