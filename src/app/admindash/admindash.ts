import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { Observable, startWith, Subject,switchMap } from 'rxjs';
import { Adminauth } from '../adminauth';

@Component({
  selector: 'app-admindash',
  standalone: false,
  templateUrl: './admindash.html',
  styleUrls: ['./admindash.css'],
})
export class Admindash {
  patients$ !: Observable<Patient[]>;
  refresh$ = new Subject<void>();
  constructor(private patientService: PatientService,private adminauth: Adminauth) {}

  ngOnInit(): void {
    this.patients$ = this.refresh$.pipe(startWith(void 0),
    switchMap(() => this.patientService.getPatientList()));
  }

  delete(id: number) { 
    this.patientService.deletePatient(id).subscribe((data) => {
      console.log(data);
      this.refresh$.next();
    });
  }

  logout(){
    this.adminauth.logout();
  }
}
