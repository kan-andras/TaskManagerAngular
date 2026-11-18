import { BehaviorSubject } from 'rxjs';
import { Msg } from '../interfaces/message';
import { Service } from '@angular/core';

@Service()

export class MessageService {
    private messageSubject = new BehaviorSubject<Msg | null>(null);
    message$ = this.messageSubject.asObservable();

    show(type: Msg['type'], title: string, message: string) {
        this.messageSubject.next({ type, title, message });
        setTimeout(() => {
            this.hide();
        }, 3000);
    }
    private hide(){
        this.messageSubject.next(null);
    }
} 
