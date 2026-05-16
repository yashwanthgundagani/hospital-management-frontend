import { Component } from '@angular/core';
import { Patient } from '../patient/patient';
import { PatientService } from '../patient.service';
import { Observable, Subject, switchMap } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-docdash',
  standalone: false,
  templateUrl: './docdash.html',
  styleUrl: './docdash.css',
})
export class Docdash {
  patients$ !:Observable<Patient[]>;
  private refresh$ = new Subject<void>();
  
  constructor(private patientService: PatientService) {}
  
    ngOnInit(): void {
      this.patients$ = this.refresh$.pipe(startWith(void 0),
      switchMap(() => this.patientService.getPatientList()));
    }
}
