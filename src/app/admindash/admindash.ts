import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient/patient';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-admindash',
  standalone: false,
  templateUrl: './admindash.html',
  styleUrl: './admindash.css',
})
export class Admindash {
  patients: Patient[] = [];
  constructor(private patientService: PatientService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getPatients();
  }
  
  getPatients() {
    this.patientService.getPatientList().subscribe((data: Patient[]) => {
      console.log("API Response:", data);
      this.patients = data;
      this.cdr.detectChanges(); // Manually trigger change detection
      console.log("Assigned patients:", this.patients);
    });
  }
}
