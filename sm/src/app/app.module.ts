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
@NgModule({
  declarations: [
    AppComponent,
    UserManagementComponent,
    HeaderComponent,
    FooterComponent,
    ChildDetailsComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
