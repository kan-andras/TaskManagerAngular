import { Component } from '@angular/core';
import { RouterModule, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../app/services/auth.service';
import { OnInit } from '@angular/core';


@Component({
  imports: [RouterModule, RouterLinkActive],
  selector: 'app-navbar',
  styleUrl: './navbar.scss',
  templateUrl: './navbar.html',
})
export class Navbar implements OnInit {

  constructor(
    private auth: AuthService
  ) {}

  loggedUser: string = '';
  isLoggedIn: boolean = false;

  ngOnInit() {
    this.auth.isloggedIn$.subscribe((res) => {
      this.isLoggedIn = res;
      if (res) {
        this.loggedUser = this.auth.loggedUser().name;
      } else {
        this.loggedUser = '';
      }
    });
  }
}
