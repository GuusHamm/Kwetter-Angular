import {RouterModule, Routes} from '@angular/router';
import {StartpageComponent} from './startpage/startpage.component';
import {AccountComponent} from 'app/account/account.component';
import {ModuleWithProviders} from '@angular/core';
import {LoginComponent} from './login/login.component';
/**
 * Created by guushamm on 28-3-17.
 */
const appRoutes: Routes = [
  {
    component: StartpageComponent,
    path: '',
  },
  {
    component: AccountComponent,
    path: 'account'
  },
  {
    component: LoginComponent,
    path: 'login'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
