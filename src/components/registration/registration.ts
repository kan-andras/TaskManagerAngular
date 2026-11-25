import { Component } from '@angular/core';
import { MessageService } from '../../app/services/message';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../app/services/api.service';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { User } from '../../app/interfaces/user';

@Component({
  imports: [CommonModule, FormsModule, RouterModule],
  selector: 'app-registration',
  styleUrl: './registration.scss',
  templateUrl: './registration.html',
})
export class Registration {

  user: User = {
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
    private router: Router
  ) {}

  register() {
    if (!this.user.name || !this.user.email || !this.user.password || !this.user.confirm) {
      this.messageService.show('error', 'Hiányzó adat', 'Tölts ki minden mezőt.', 'bi-exclamation-circle');
      return;
    }

    this.ApiService.register('users', this.user).subscribe({
      next: () => {
        this.messageService.show('success', 'Sikeres regisztráció', 'A regisztráció sikeresen megtörtént.', 'bi-check-circle');
        this.user = { ID: 0, name: '', email: '', password: '', confirm: '', role: 'user' };
        this.router.navigate(['login']);
      },
      error: (error) => {
        const detail = error.error?.error;
        this.messageService.show('error', 'Hiba a regisztráció során', detail || 'A regisztráció sikertelen volt. Kérlek próbáld újra.', 'bi-exclamation-circle');
      }
    });
  }
}
