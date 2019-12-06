import { Component, OnInit } from '@angular/core';
import { AdminauthService, TokenPayload } from '../adminauth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adminsignup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.css']
})
export class AdminsignupComponent implements OnInit {


  credentials: TokenPayload = {
    _id: '',
    user_name: '',
    contact_number: '',
    email: '', 
    password: ''
  }
  constructor(private auth: AdminauthService,private router: Router) { 
      
  }
 
  ngOnInit(){
  
  }

  
  register() {
    this.auth.register(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl('/admin/login')
      },
      err => {
        console.error(err)
      }
    )
  }
}
