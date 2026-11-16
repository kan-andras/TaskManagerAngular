import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {
  @Input() company: string = '';
  @Input() author: string = '';
}
