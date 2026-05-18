import { Component } from '@angular/core';
import { Patient } from '../patient/patient';
import { PatientService } from '../patient.service';
import { Observable, Subject, switchMap } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docdash',
  standalone: false,
  templateUrl: './docdash.html',
  styleUrl: './docdash.css',
})
export class Docdash {
  patients$ !:Observable<Patient[]>;
  private refresh$ = new Subject<void>();
  
  constructor(private patientService: PatientService,private router: Router) {}
  
    ngOnInit(): void {
      this.patients$ = this.refresh$.pipe(startWith(void 0),
      switchMap(() => this.patientService.getPatientList()));
    }

    updatePatient(id: number) {
      // Implement navigation to update patient page
      console.log('Update patient with ID:', id);
      this.router.navigate(['/update-patient', id]);
      // Example: this.router.navigate(['/update-patient', id]);
    }
}
