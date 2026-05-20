import { Injectable } from '@angular/core';
import { Medicine } from './medicine';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateMedicineDto } from './create-medicine-dto';

@Injectable({
  providedIn: 'root',
})
export class MedicineService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:8080/api/v1/medicine';

  getMedicineList(): Observable<Medicine[]> {
    return this.http.get<Medicine[]>(`${this.baseUrl}`);
  }

  createMedicine(medicine: CreateMedicineDto): Observable<Medicine> {
    return this.http.post<Medicine>(`${this.baseUrl}`, medicine);
  }

  deleteMedicine(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getMedicineById(id:number):Observable<Medicine> {
      return this.http.get<Medicine>(`${this.baseUrl}/${id}`);
  }
  
  updateMedicine(id: number, medicine: Medicine): Observable<Object> {
      return this.http.put<Medicine>(`${this.baseUrl}/${id}`, medicine);
  }
}
