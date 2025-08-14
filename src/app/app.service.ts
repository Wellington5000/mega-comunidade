import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private API_URL = 'https://megasemsegredo.com.br/api/';

  constructor(private http: HttpClient) { }

  downloadRegulation(lotteryCode: string): Observable<Blob> {
    return this.http.get(this.API_URL + `promocoes/${lotteryCode}/download-regulamento`, {
      responseType: 'blob'
    });
  }
}
