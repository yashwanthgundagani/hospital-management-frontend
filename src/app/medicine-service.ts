import { Injectable } from '@angular/core';
import { Medicine } from './medicine';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MedicineService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:8080/api/v1/medicine';

  getMedicineList(): Observable<Medicine[]> {
    return this.http.get<Medicine[]>(`${this.baseUrl}`);
  }
}
