import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ChildDetailsComponent } from './user-management/child-details/child-details.component';
import { AttendanceComponent } from './user-management/child-details/child/attendance/attendance.component';
import { ChildComponent } from './user-management/child-details/child/child.component';
import { SubjectComponent } from './user-management/child-details/child/subject/subject.component';
import { TeacherManagementComponent } from './teacher-management/teacher-management/teacher-management.component';
import { MyclassComponent } from './teacher-management/teacher-management/myclass/myclass.component';
import { ClassComponent } from './teacher-management/teacher-management/myclass/class/class.component';
import { MyTopicsComponent } from './teacher-management/teacher-management/myclass/class/my-topics/my-topics.component';
import { ResultsComponent } from './teacher-management/teacher-management/myclass/class/results/results.component';
import { TeacherAttendanceComponent } from './teacher-management/teacher-management/myclass/class/teacher-attendance/teacher-attendance.component';

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
    path: 'teacher-management',
    component: TeacherManagementComponent,
  },
  {
    path: 'my-class',
    component: MyclassComponent,
  },
  {
    path: 'class',
    component: ClassComponent,
  },
  {
    path: 'teacher-attendance',
    component: TeacherAttendanceComponent,
  },
  {
    path: 'teacher-results',
    component: ResultsComponent,
  },
  {
    path: 'teacher-topics',
    component: MyTopicsComponent,
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
