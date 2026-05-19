import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../patient.service';
import { CreatePatientDto } from './dto/create-patient-dto';
@Component({
  selector: 'app-create-patient',
  standalone: false,
  templateUrl: './create-patient.html',
  styleUrls: ['./create-patient.css'],
})
export class CreatePatient {
  patient: CreatePatientDto = new CreatePatientDto();

  constructor(private patientService: PatientService,private router: Router) {}

  savePatient(){
    this.patientService.createPatient(this.patient).subscribe({
      next: (data) => {
        console.log('Success:',data);
        this.goToPatientList();
      },
      error: (error) => { console.error('API Error:', error); }
    });
  }

  goToPatientList(){
    this.router.navigate(['/docdash']);
  }

  onSubmit() {
    console.log('Patient Form submitted!', this.patient);
    this.savePatient();
  }
}
