import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../shared/components/header/header.component';

@Component({
    selector: 'app-public',
    styleUrls: ['./public.component.scss'],
    imports: [CommonModule, HeaderComponent, RouterOutlet],
    templateUrl: './public.component.html',
})
export class PublicComponent {
}