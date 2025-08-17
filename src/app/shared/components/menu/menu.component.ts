import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-menu',
  imports: [MatIconModule, MatListModule, MatDividerModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true
})
export class MenuComponent {
  menuItems = [
    {
      icon: 'keyboard_arrow_right',
      label: 'Menu Item 1',
      route: '/'
    },
    {
      icon: 'keyboard_arrow_right',
      label: 'Menu Item 2',
      route: '/'
    },
    {
      icon: 'keyboard_arrow_right',
      label: 'Menu Item 3',
      route: '/'
    },
    {
      icon: 'keyboard_arrow_right',
      label: 'Menu Item 4',
      route: '/'
    },
    {
      icon: 'keyboard_arrow_right',
      label: 'Menu Item 5',
      route: '/'
    },
    {
      icon: 'keyboard_arrow_right',
      label: 'Menu Item 6',
      route: '/'
    }
  ];

  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
