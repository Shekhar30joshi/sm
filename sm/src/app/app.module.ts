import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { UserManagementComponent } from './user-management/user-management.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ChildDetailsComponent } from './user-management/child-details/child-details.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { ChildComponent } from './user-management/child-details/child/child.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AttendanceComponent } from './user-management/child-details/child/attendance/attendance.component';
import { DemoMaterialModule } from './material-module';
import { SubjectComponent } from './user-management/child-details/child/subject/subject.component';
import { TeacherManagementComponent } from './teacher-management/teacher-management/teacher-management.component';
import { MyclassComponent } from './teacher-management/teacher-management/myclass/myclass.component';
import { ClassComponent } from './teacher-management/teacher-management/myclass/class/class.component';
import { ResultsComponent } from './teacher-management/teacher-management/myclass/class/results/results.component';
import { MyTopicsComponent } from './teacher-management/teacher-management/myclass/class/my-topics/my-topics.component';
import { TeacherAttendanceComponent } from './teacher-management/teacher-management/myclass/class/teacher-attendance/teacher-attendance.component';
@NgModule({
  declarations: [
    AppComponent,
    UserManagementComponent,
    HeaderComponent,
    FooterComponent,
    ChildDetailsComponent,
    ChildComponent,
    AttendanceComponent,
    SubjectComponent,
    TeacherManagementComponent,
    MyclassComponent,
    ClassComponent,
    ResultsComponent,
    MyTopicsComponent,
    TeacherAttendanceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AuthModule,
    HttpClientModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    IvyCarouselModule,
    MatDialogModule,
    DemoMaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
