import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Beyblade, BeybladeDetail } from "../entities/beyblade";
import { HttpHeadersService } from "../services/http-headers.service";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class BeybladesListApiService {
  private readonly API_URL = environment.API_URL;
  private readonly http = inject(HttpClient);
  private readonly headersService = inject(HttpHeadersService);

  public getAllBeyblades(): Observable<Beyblade[] | undefined> {
    const url = `${this.API_URL}/allBeyblades`;
    return this.http.get<Beyblade[]>(url, {
      headers: this.headersService.getCommonHeaders(),
    });
  }

  public getBeyblade(beybladeKey: string): Observable<BeybladeDetail | undefined> {
    const url = `${this.API_URL}/beyblade`;
    return this.http.post<BeybladeDetail>(
      url,
      { key: beybladeKey },
      { headers: this.headersService.getCommonHeaders() }
    );
  }
}
