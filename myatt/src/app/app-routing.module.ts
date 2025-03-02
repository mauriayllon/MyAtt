import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignlogComponent } from './components/signlog/signlog.component';
import { ClassadminComponent } from './components/classadmin/classadmin.component';
import { ClasssignupComponent } from './components/classsignup/classsignup.component';


const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch:'full'},
  
  {path:'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)},
  {path:'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)},
  //{path:'login', component: SignlogComponent},// ...canActivate(redirectLoggedInToDashboard)},
  //{path:'dashboard', component: DashboardComponent },//...canActivate(redirectUnauthorizedToLogin)},
  {path:'classadmin', component: ClassadminComponent },
  {path:'classsignup', component: ClasssignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
