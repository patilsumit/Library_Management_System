import { Injectable } from '@angular/core';
import { AdminauthService } from './adminauth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminauthGuardService {
  constructor(private auth: AdminauthService, private router: Router) {}

  canActivate() {
    if (!this.auth.isLoggedIn()) {
      this.router.navigateByUrl('/')
      return false
    }
    return true
  }
}
