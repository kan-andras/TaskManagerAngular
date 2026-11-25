import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../../app/services/message';
import { ApiService } from '../../app/services/api.service';
import { RouterModule, Router } from '@angular/router';
import { User } from '../../app/interfaces/user';
import { AuthService } from '../../app/services/auth.service';

@Component({
  imports: [FormsModule, RouterModule],
  selector: 'app-login',
  styleUrl: './login.scss',
  templateUrl: './login.html',
})
export class Login {

  existuser: User = {
    ID: 0,
    name: '',
    email: '',
    password: '',
    confirm: '',
    role: 'user',
  };

  constructor(
    private messageService: MessageService,
    private ApiService: ApiService,
    private router: Router,
    private authService: AuthService
  ){}

  login(){
    this.ApiService.login('users', {email: this.existuser.email, password: this.existuser.password}).subscribe({
      next: (response) => {
        this.messageService.show('success', 'Sikeres bejelentkezés', 'A bejelentkezés sikeresen megtörtént.', 'bi-check-circle');
        // redirect to profile or home page after successful login
        this.authService.login(response.token); // Assuming you have a method to set the logged-in state
        this.router.navigate(['profile']);
      },
      error: (error) => {
        const detail = error.error?.error;
        this.messageService.show('error', 'Hiba a bejelentkezés során', detail || 'A bejelentkezés sikertelen volt. Kérlek próbáld újra.', 'bi-exclamation-circle');
      }
    });
  }
}