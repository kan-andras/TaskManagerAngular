import { Component } from '@angular/core';
import { MessageService } from '../../app/services/message';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../app/services/api.service';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-registration',
  styleUrl: './registration.scss',
  templateUrl: './registration.html',
})
export class Registration {

  user = {
    name: '',
    email: '',
    password: '',
    confirm: '',
  };

  constructor(
    private messageService: MessageService,
    private apiService: ApiService
  ) {}

  register() {
    if (!this.user.name || !this.user.email || !this.user.password || !this.user.confirm) {
      this.messageService.show('error', 'Hiányzó adat', 'Tölts ki minden mezőt.', 'bi-exclamation-circle');
      return;
    }

    this.apiService.register('users', this.user).subscribe({
      next: () => {
        this.messageService.show('success', 'Sikeres regisztráció', 'A regisztráció sikeresen megtörtént.', 'bi-check-circle');
      },
      error: (error) => {
        const detail = error.error?.error;
        this.messageService.show('error', 'Hiba a regisztráció során', detail || 'A regisztráció sikertelen volt. Kérlek próbáld újra.', 'bi-exclamation-circle');
      }
    });
  }
}
