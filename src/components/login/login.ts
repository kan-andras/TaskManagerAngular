import { Component } from '@angular/core';
import { MessageService } from '../../app/services/message';

@Component({
  imports: [],
  selector: 'app-login',
  styleUrl: './login.scss',
  templateUrl: './login.html',
})
export class Login {
  constructor(private messageService: MessageService){}
  login() {
    this.messageService.show('error', 'Login Error', 'Invalid email or password', 'bi-exclamation-triangle');
  }
}
