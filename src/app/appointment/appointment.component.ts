import { Component } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../appointment';
import { Observable, startWith } from 'rxjs';
import { Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-appointment',
  standalone: false,
  templateUrl: './appointment.html',
  styleUrl: './appointment.css',
})
export class AppointmentComponent {
  constructor(private appointmentService: AppointmentService) {}
  refresh$ = new Subject<void>();
  appointments$!: Observable<Appointment[]>;

  ngOnInit(): void {
      this.appointments$ = this.refresh$.pipe(startWith(void 0),
      switchMap(() => this.appointmentService.getAppointmentList()));
    // this.appointments$ = this.appointmentService.getAppointmentList();
  }

  delete(id: number) {
    //todo
    this.appointmentService.deleteAppointment(id).subscribe((data) => {
      console.log(data);
      //this.appointments$ = this.appointmentService.getAppointmentList();
      this.refresh$.next();
    });
  }

}
