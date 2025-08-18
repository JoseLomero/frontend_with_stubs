import { Routes } from '@angular/router';
import { BeybladesListComponent } from './private/beyblade-list/beyblades-list.component';
import { BeybladeDetailComponent } from './private/beyblade-detail/beyblade-detail.component';
import { LoginComponent } from './public/auth/login.component';
import { AuthGuard } from './public/auth/auth.guard';
import { PrivateComponent } from './private/private.component';
import { PublicComponent } from './public/public.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/beybladesList',
    pathMatch: 'full'
  },
  {
    path: '',
    component: PrivateComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'beybladesList',
        component: BeybladesListComponent,
      },
      {
        path: 'beyblade-detail/:key',
        component: BeybladeDetailComponent,
      }
    ]
  },
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
    ]
  },
];