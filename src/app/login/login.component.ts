import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials: TokenPayload = {
    _id: '',
    user_name: '',
    contact_number: '',
    email: '',
    password: ''
  }

  constructor(private auth: AuthenticationService, private router: Router) {}

   ngOnInit(){}

  login() {
    this.auth.login(this.credentials).subscribe((response) => {
       console.log(response)
      },
      err => {
        console.error(err)
      }
    )
  }
}
