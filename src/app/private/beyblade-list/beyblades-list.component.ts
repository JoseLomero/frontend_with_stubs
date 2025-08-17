import { Component, inject, OnInit } from '@angular/core';
import { BeybladesListStore } from '../../core/store/beyblades-list.store';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-beyblades-list',
  templateUrl: './beyblades-list.component.html',
  styleUrls: ['./beyblades-list.component.scss'],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule,
  ]
})
export class BeybladesListComponent implements OnInit {

  private readonly beybladesListStore = inject(BeybladesListStore)
  private readonly router = inject(Router)

  public readonly beybladesList$ = this.beybladesListStore.beybladesList$;
  public readonly loading$ = this.beybladesListStore.beybladeListLoading$;
  public error: string | null = null;

  public ngOnInit(): void {
    this.loadBeyblades();
  }

  private loadBeyblades(): void {
    this.beybladesListStore.loadAllBeyblades();
    // try {

    // } catch (error) {
    //   this.error = error instanceof Error ? error.message : 'Failed to load beyblades';
    //   console.error('Error loading beyblades:', error);
    // } finally {
    //   this.loading = false;
    // }
  }

  public navigateToBeyblade(key: string): void {
    this.router.navigate(['/beyblade-detail', key]);
  }
}
