import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
