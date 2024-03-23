import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ChildDetailsComponent } from './user-management/child-details/child-details.component';
import { AttendanceComponent } from './user-management/child-details/child/attendance/attendance.component';
import { ChildComponent } from './user-management/child-details/child/child.component';
import { SubjectComponent } from './user-management/child-details/child/subject/subject.component';

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
  {
    path: 'child',
    component: ChildComponent,
  },
  {
    path: 'attendance',
    component: AttendanceComponent,
  },
  {
    path: 'subject',
    component: SubjectComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
