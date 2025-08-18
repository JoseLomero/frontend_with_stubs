import { Component, inject, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BeybladesListStore } from "../../core/store/beyblades-list.store";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatToolbarModule } from "@angular/material/toolbar";

@Component({
  selector: "app-beyblade-detail",
  templateUrl: "./beyblade-detail.component.html",
  styleUrls: ["./beyblade-detail.component.scss"],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
  ],
})
export class BeybladeDetailComponent implements OnInit {
  private readonly beybladesListStore = inject(BeybladesListStore);
  private readonly route = inject(ActivatedRoute);

  public readonly beyblade = this.beybladesListStore.beyblade;
  public readonly loading = this.beybladesListStore.beybladeLoading;
  public readonly error = this.beybladesListStore.beybladeError;

  public ngOnInit(): void {
    const key = this.route.snapshot.paramMap.get("key");
    this.loadBeyblade(key);
  }

  public loadBeyblade(beybladeKey: string | null): void {
    if (beybladeKey) {
      this.beybladesListStore.loadBeyblade(beybladeKey);
    }
  }
}
