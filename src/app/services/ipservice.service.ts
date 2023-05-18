import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IpserviceService {
  private apiUrl = 'https://api.ipify.org?format=json';

  constructor(private http: HttpClient) { }

  getIp() {
    return this.http.get(this.apiUrl);
  }
}
