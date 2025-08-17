import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../shared/components/header/header.component';
import { MenuComponent } from '../shared/components/menu/menu.component';

@Component({
    selector: 'app-private',
    styleUrls: ['./private.component.scss'],
    imports: [CommonModule, HeaderComponent, MenuComponent, RouterOutlet],
    templateUrl: './private.component.html',
})
export class PrivateComponent {
}