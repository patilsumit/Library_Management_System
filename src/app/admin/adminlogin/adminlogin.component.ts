import { Component, OnInit } from '@angular/core';
import { AdminauthService, TokenPayload } from '../adminauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  credentials: TokenPayload = {
    _id: '',
    user_name: '',
    contact_number: '',
    email: '',
    password: ''
  }

  constructor(private auth: AdminauthService, private router: Router) {}

   ngOnInit(){}

  login(event: Event) {
    event.preventDefault();
    this.auth.login(this.credentials).subscribe((response) => {
       console.log(response)
      },
      err => {
        console.error(err)
      }
    )
  }
}
