import { inject, Injectable } from "@angular/core";
import { Beyblade, BeybladeDetail } from "../entities/beyblade";
import { BehaviorSubject, tap } from "rxjs";
import { BeybladesListApiService } from "../api/beyblades-list-api.service";

@Injectable({ providedIn: "root" })
export class BeybladesListStore {
  private readonly beybladeListApi = inject(BeybladesListApiService);

  private readonly beybladesList = new BehaviorSubject<Beyblade[] | undefined>(
    undefined
  );
  public readonly beybladesList$ = this.beybladesList.asObservable();

  private readonly beybladeListLoading = new BehaviorSubject<boolean>(false);
  public readonly beybladeListLoading$ =
    this.beybladeListLoading.asObservable();
    
    private readonly beyblade = new BehaviorSubject<BeybladeDetail | undefined>(
      undefined
    );
    public readonly beyblade$ = this.beyblade.asObservable();
    private readonly beybladeLoading = new BehaviorSubject<boolean>(false);
    public readonly beybladeLoading$ =
      this.beybladeListLoading.asObservable();

  //   public getAllBeyblades(): Observable<Beyblade[] | undefined> {
  //     return this.beybladeListApi
  //       .getAllBeyblades()
  //       .pipe(
  //         tap((beybladeListResponse) =>
  //           this.beybladesList.next(beybladeListResponse)
  //         )
  //       );
  //   }

  //   public getBeyblade(beybladeKey: string): Observable<Beyblade | undefined> {
  //     return this.beybladeListApi
  //       .getBeyblade(beybladeKey)
  //       .pipe(tap((beybladeResponse) => this.beyblade.next(beybladeResponse)));
  //   }

  public loadAllBeyblades(): void {
    this.beybladeListLoading.next(true);
    this.beybladeListApi
      .getAllBeyblades()
      .pipe(
        tap((beybladeListResponse) =>
          this.beybladesList.next(beybladeListResponse)
        )
      )
      .subscribe({ complete: () => this.beybladeListLoading.next(false) });
    }
    
    public loadBeyblade(beybladeKey: string): void {
      this.beybladeLoading.next(true);
      this.beybladeListApi
      .getBeyblade(beybladeKey)
      .pipe(tap((beybladeResponse) => this.beyblade.next(beybladeResponse)))
      .subscribe({ complete: () => this.beybladeLoading.next(false) });
  }
}
