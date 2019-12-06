import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { AdminauthService } from './admin/adminauth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LibraryManagementSystem';
  constructor(public auth: AuthenticationService,public adminauth:AdminauthService) {}
}
