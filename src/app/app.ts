import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from '../components/footer/footer';
import { Navbar } from '../components/navbar/navbar';
import { Header } from '../components/header/header';
import { MessageComponent } from '../components/message/message';

@Component({
  imports: [RouterOutlet, Navbar, Footer, Header, MessageComponent],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('TaskManager');
  cmpny: string = 'Bajai SZC Türr István Technikum';
  athr: string = '13.A szoftverfejlesztő';
}
