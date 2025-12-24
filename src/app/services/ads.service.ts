import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ad } from 'src/models/ad';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AdsService {
  private apiUrl = 'http://localhost:5080/api/ads';

  constructor(private http: HttpClient) {}

  getAds(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  create(ad: Ad) : Observable<Ad>{
    return this.http.post<Ad>(this.apiUrl, ad);
  }

  update(ad: Ad) : Observable<Ad>{
    return this.http.put<Ad>(`${this.apiUrl}/${ad.id}`, ad);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
