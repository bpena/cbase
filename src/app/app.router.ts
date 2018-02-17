import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth/services/auth.guard';

const ROUTES: Routes = [
  {
    path: '',
//    canActivate: [AuthGuard],
    loadChildren: '@layout/layout.module#LayoutModule'
  },
  {
    path: 'auth',
    loadChildren: '@auth/auth.module#AuthModule'
  }
];

export const AppRouter = RouterModule.forRoot(ROUTES);
