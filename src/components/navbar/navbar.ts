import { Component } from '@angular/core';
import { RouterModule, RouterLinkActive } from '@angular/router';


@Component({
  imports: [RouterModule, RouterLinkActive],
  selector: 'app-navbar',
  styleUrl: './navbar.scss',
  templateUrl: './navbar.html',
})
export class Navbar {}
