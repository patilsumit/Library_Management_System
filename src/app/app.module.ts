import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';


import { AuthGuardService } from './auth-guard.service';
import { AuthenticationService } from './authentication.service';
import { AdminauthGuardService } from './admin/adminauth-guard.service';
import { AdminauthService } from './admin/adminauth.service';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminsignupComponent } from './admin/adminsignup/adminsignup.component';
import { AdminprofileComponent } from './admin/adminprofile/adminprofile.component';
import { AddbookComponent } from './admin/addbook/addbook.component';
import { BooklistComponent } from './admin/booklist/booklist.component';
import { EditbooklistComponent } from './admin/editbooklist/editbooklist.component';
import { AssignbookComponent } from './admin/assignbook/assignbook.component';
import { TransactiondetailsComponent } from './admin/transactiondetails/transactiondetails.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    AdminloginComponent,
    AdminsignupComponent,
    AdminprofileComponent,
    AddbookComponent,
    BooklistComponent,
    EditbooklistComponent,
    AssignbookComponent,
    TransactiondetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthenticationService, AuthGuardService, AdminauthGuardService, AdminauthService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
