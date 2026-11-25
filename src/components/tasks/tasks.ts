import { Component } from '@angular/core';
import { MessageService } from '../../app/services/message';
import { ApiService } from '../../app/services/api.service';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { TaskItem } from '../../app/interfaces/tasks';

@Component({
  imports: [],
  selector: 'app-tasks',
  styleUrl: './tasks.scss',
  templateUrl: './tasks.html',
})
export class Tasks implements OnInit {

  constructor(
    private messageService: MessageService,
    private ApiService: ApiService,
    private router: Router
  ) {}

  tasks: TaskItem[] = [];

  ngOnInit(): void 
  {
    this.ApiService.readAll('tasks').subscribe({
      next: (response: any) => {
        // Handle the response data here
        this.tasks = response;
      },
      error: (error) => {
        const detail = error.error?.error;
        this.messageService.show('error', 'Hiba a feladatok lekérése során', detail || 'A feladatok lekérése sikertelen volt. Kérlek próbáld újra.', 'bi-exclamation-circle');
      }
    });
  }


}
