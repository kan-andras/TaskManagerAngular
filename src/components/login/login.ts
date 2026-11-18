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
    this.messageService.show('success', 'Login Successful', 'You have successfully logged in.');
  }
}
