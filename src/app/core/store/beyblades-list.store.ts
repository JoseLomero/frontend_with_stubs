import { inject, Injectable, signal } from "@angular/core";
import { Beyblade, BeybladeDetail } from "../entities/beyblade";
import { tap } from "rxjs";
import { BeybladesListApiService } from "../api/beyblades-list-api.service";

@Injectable({ providedIn: "root" })
export class BeybladesListStore {
  private readonly beybladeListApi = inject(BeybladesListApiService);

  private readonly _beybladesList = signal<Beyblade[] | undefined>(undefined);
  public readonly beybladesList = this._beybladesList.asReadonly();
  private readonly _beybladeListLoading = signal<boolean>(false);
  public readonly beybladeListLoading = this._beybladeListLoading.asReadonly();

  private readonly _beyblade = signal<BeybladeDetail | undefined>(undefined);
  public readonly beyblade = this._beyblade.asReadonly();
  private readonly _beybladeLoading = signal<boolean>(false);
  public readonly beybladeLoading = this._beybladeLoading.asReadonly();

  private readonly _beybladeListError = signal<string | null>(null);
  public readonly beybladeListError = this._beybladeListError.asReadonly();

  private readonly _beybladeError = signal<string | null>(null);
  public readonly beybladeError = this._beybladeError.asReadonly();

  public loadAllBeyblades(): void {
    this._beybladeListLoading.set(true);
    this.beybladeListApi
      .getAllBeyblades()
      .pipe(
        tap({
          next: (beybladeListResponse) => {
            this._beybladesList.set(beybladeListResponse)
          },
          error: (error) => {
            this._beybladeListError.set(error.message || 'Failed to load beyblades list')
          }
        })
      )
      .subscribe({ complete: () => this._beybladeListLoading.set(false) });
  }

  public loadBeyblade(beybladeKey: string): void {
    this._beybladeLoading.set(true);
    this._beybladeError.set(null);
    this.beybladeListApi
      .getBeyblade(beybladeKey)
      .pipe(
        tap({
          next: (beybladeResponse) => {
            this._beyblade.set(beybladeResponse);
            this._beybladeError.set(null);
          },
          error: (error) => {
            this._beybladeError.set(error.message || 'Failed to load beyblade details');
            this._beyblade.set(undefined);
          }
        })
      )
      .subscribe({ 
        complete: () => this._beybladeLoading.set(false) 
      });
  }
}
