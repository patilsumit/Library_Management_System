import { Component, OnInit} from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  credentials: TokenPayload = {
    _id: '',
    user_name: '',
    contact_number: '',
    email: '', 
    password: ''
  }
  constructor(private auth: AuthenticationService,private router: Router) { 
      
  }
 
  ngOnInit(){
  
  }

  
  register() {
    this.auth.register(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl('/')
      },
      err => {
        console.error(err)
      }
    )
  }

}
