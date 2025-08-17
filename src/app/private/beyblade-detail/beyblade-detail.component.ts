import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BeybladesListStore } from '../../core/store/beyblades-list.store';
import { Beyblade } from '../beyblade-list/beyblade';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthStore } from '../../core/store/auth.store';

@Component({
    selector: 'app-beyblade-detail',
    templateUrl: './beyblade-detail.component.html',
    styleUrls: ['./beyblade-detail.component.scss'],
    imports: [CommonModule, MatCardModule, MatButtonModule, MatDividerModule, MatIconModule, MatProgressSpinnerModule, MatToolbarModule]
})
export class BeybladeDetailComponent implements OnInit {
    public beyblade?: Beyblade;
    public error?: string;
    private readonly route = inject(ActivatedRoute)
    private readonly beybladesListStore = inject(BeybladesListStore)
    private readonly router = inject(Router)
    private readonly authStore = inject(AuthStore)


    public ngOnInit(): void {
        // const key = this.route.snapshot.paramMap.get('key');
        // if (key) {
        //     this.beybladesListStore.getBeyblade(key).then((beyblade) => {
        //         this.beyblade = beyblade;
        //     }).catch((error) => {
        //         this.error = error.message;
        //     });
        // }
    }

    public goBack(): void {
        this.router.navigate(['/beybladesList']);
    }

    public logout(): void {
        this.authStore.logout();
        this.router.navigate(['/login']);
    }
}
