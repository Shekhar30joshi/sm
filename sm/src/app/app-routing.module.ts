import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ChildDetailsComponent } from './user-management/child-details/child-details.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'user-management',
    component: UserManagementComponent,
  },
  {
    path: 'child-details',
    component: ChildDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
