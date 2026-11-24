import { Component } from '@angular/core';
import { Msg } from '../../app/interfaces/message';
import { CommonModule } from '@angular/common';
import { MessageService } from '../../app/services/message';
import { OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChangeDetectorRef, inject } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-message',
  styleUrl: './message.scss',
  templateUrl: './message.html',
})
export class MessageComponent implements OnInit, OnDestroy {
  private cdr = inject(ChangeDetectorRef);
  private sub?: Subscription;

  private messageService = inject(MessageService);

  message: Msg | null = null;

  ngOnInit() {
      this.messageService.message$.subscribe((msg) => {
      this.message = msg;
      this.cdr.markForCheck();
      });
  }
  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
