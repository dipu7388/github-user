import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class HttpService {
  constructor(private http: HttpClient) {}

  async get({
    url,
    params = new HttpParams(),
  }: {
    url: string;
    params?: HttpParams;
  }) {
    return this.http
      .get(url, {
        params: params,
        headers: new HttpHeaders(),
      })
      .toPromise();
  }
  async post(url: string, params = new HttpParams()) {
    return this.http.post(url, { params: params }).toPromise();
  }
}
