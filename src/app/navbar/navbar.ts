import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-navbar',
  imports: [ButtonModule, DrawerModule, TooltipModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  protected menuVisivel = false;

  protected alternarMenu() {
    this.menuVisivel = !this.menuVisivel;
  }

  protected fecharMenu() {
    this.menuVisivel = false;
  }
}
