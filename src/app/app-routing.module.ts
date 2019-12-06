import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuardService } from './auth-guard.service';
import { AdminsignupComponent } from './admin/adminsignup/adminsignup.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminprofileComponent } from './admin/adminprofile/adminprofile.component';
import { AdminauthGuardService } from './admin/adminauth-guard.service';
import { AddbookComponent } from './admin/addbook/addbook.component';
import { BooklistComponent } from './admin/booklist/booklist.component';
import { EditbooklistComponent } from './admin/editbooklist/editbooklist.component';
import { AssignbookComponent } from './admin/assignbook/assignbook.component';
import { TransactiondetailsComponent } from './admin/transactiondetails/transactiondetails.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users/login', component: LoginComponent },
  { path: 'users/signup', component: SignupComponent },
  { path: 'admin/signup', component: AdminsignupComponent },
  { path: 'admin/login', component: AdminloginComponent },
  {
    path: 'users/profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'admin/profile',
    component: AdminprofileComponent,
    canActivate: [AdminauthGuardService]
  },
  {
    path: 'admin/addbooking',
    component: AddbookComponent,
    canActivate: [AdminauthGuardService]
  },
  {
    path: 'admin/booklist',
    component: BooklistComponent,
    canActivate: [AdminauthGuardService]
  },
  {
    path: 'admin/booklist/edit/:id',
    component: EditbooklistComponent,
    canActivate: [AdminauthGuardService]
  },
  {
    path: 'admin/assignbook',
    component: AssignbookComponent,
    canActivate: [AdminauthGuardService]
  },
  {
    path: 'admin/transactiondetails',
    component: TransactiondetailsComponent,
    canActivate: [AdminauthGuardService]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)], //{ useHash: true } when page refress data are lost  
  exports: [RouterModule]
})
export class AppRoutingModule { }
