import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from './patient/patient';
import { Observable } from 'rxjs';
import { CreatePatientDto } from './create-patient-dto';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(private httpClient: HttpClient) {}
  private baseUrl = 'http://localhost:8080/api/v1/patient';

  getPatientList():Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(`${this.baseUrl}`);
  }

  deletePatient(id:number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  createPatient(patient: CreatePatientDto): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, patient);
  }
}
