import { Component } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';
import { CreateAppointmentDto } from './dto/create-appointment-dto';

@Component({
  selector: 'app-create-appointment',
  standalone: false,
  templateUrl: './create-appointment.html',
  styleUrl: './create-appointment.css',
})
export class CreateAppointment {
  appointment:CreateAppointmentDto = new CreateAppointmentDto();
  constructor(private appointmentService: AppointmentService,private router: Router) {}

  saveAppointment() {
    this.appointmentService.createAppointment(this.appointment).subscribe({
      next: (data) => {
        console.log('Success:',data);
        this.goToAppointmentList();
      },
      error: (error) => { console.error('API Error:', error); }
    });
  }

  onSubmit() {
    // Handle form submission logic here
    console.log('Appointment Form submitted!', this.appointment);
    this.saveAppointment();

  }

  goToAppointmentList(){
    this.router.navigate(['/appointmentlist']);
  }
}
