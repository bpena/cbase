import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '@app/modules/layout/layout.component';
import { DashboardComponent } from '@app/modules/layout/views/dashboard/dashboard.component';
import { PruebaComponent } from '@layout/views/prueba/prueba.component';

const ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'prueba',
        component: PruebaComponent
      }
    ]
  }
];

export const LayoutRouter = RouterModule.forChild(ROUTES);
