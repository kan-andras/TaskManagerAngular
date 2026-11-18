import { Component } from '@angular/core';
import { Msg } from '../../app/interfaces/message';
import { CommonModule } from '@angular/common';
import { MessageService } from '../../app/services/message';
import { OnInit } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-message',
  styleUrl: './message.scss',
  templateUrl: './message.html',
})
export class MessageComponent implements OnInit {
  message: Msg | null = null;
  constructor(private messageService: MessageService) {
  };
  ngOnInit() {
      this.messageService.message$.subscribe((msg) => {
      this.message = msg;
      });
  }
}
