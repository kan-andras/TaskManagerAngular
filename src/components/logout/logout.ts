import { Component } from '@angular/core';
import { AuthService } from '../../app/services/auth.service';
import { Router } from '@angular/router';
import { MessageService } from '../../app/services/message';

@Component({
  imports: [],
  selector: 'app-logout',
  styleUrl: './logout.scss',
  templateUrl: './logout.html',
})
export class Logout {
  constructor(
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router
  ) {}
  
  
  logout() {
    this.authService.logout();
    this.messageService.show('success', 'Sikeres kijelentkezés', 'A kijelentkezés sikeresen megtörtént.', 'bi-check-circle');
    // Optionally, you can redirect the user to the login page or home page after logout
    this.router.navigate(['login']);
  }
}
