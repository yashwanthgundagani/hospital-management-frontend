import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient/patient';
import { Observable, startWith, Subject,switchMap } from 'rxjs';

@Component({
  selector: 'app-admindash',
  standalone: false,
  templateUrl: './admindash.html',
  styleUrl: './admindash.css',
})
export class Admindash {
  patients$ !: Observable<Patient[]>;
  refresh$ = new Subject<void>();
  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.patients$ = this.refresh$.pipe(startWith(void 0),
    switchMap(() => this.patientService.getPatientList()));
    // this.getPatients();
  }
  
  // getPatients() {
  //   this.patientService.getPatientLis
  //   subscribe((data: Patient[]) => {
  //     console.log("API Response:", data);
  //     this.patients$ = data;
  //             console.log("Assigned patients:", this.patients$);
  //   });

  delete(id: number) { 
    this.patientService.deletePatient(id).subscribe((data) => {
      console.log(data);
      this.refresh$.next();
    });
  }
}
