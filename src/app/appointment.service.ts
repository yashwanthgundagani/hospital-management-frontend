import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';
import { CreateAppointmentDto } from './create-appointment-dto';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  private baseUrl = 'http://localhost:8080/api/v1/appointment';

  constructor(private httpClient: HttpClient) {}

  getAppointmentList():Observable<Appointment[]> {
      return this.httpClient.get<Appointment[]>(`${this.baseUrl}`);
    }

  createAppointment(appointment: CreateAppointmentDto): Observable<Appointment> {
    return this.httpClient.post<Appointment>(`${this.baseUrl}`,appointment);
  }

  deleteAppointment(id:number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
