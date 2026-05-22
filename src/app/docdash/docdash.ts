import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Observable, Subject, switchMap } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Docauth } from '../docauth';

@Component({
  selector: 'app-docdash',
  standalone: false,
  templateUrl: './docdash.html',
  styleUrls: ['./docdash.css'],
})
export class Docdash {
  patients$ !:Observable<Patient[]>;
  private refresh$ = new Subject<void>();
  
  constructor(private patientService: PatientService,private router: Router,private docauth: Docauth) {}
  
    ngOnInit(): void {
      this.patients$ = this.refresh$.pipe(startWith(void 0),
      switchMap(() => this.patientService.getPatientList()));
    }

    update(id: number) {
      console.log('Update patient with ID:', id);
      this.router.navigate(['/update-patient', id]);
    }

    delete(id: number) {
      this.patientService.deletePatient(id).subscribe((data) => {
        console.log('Deleted successfully', data);
        this.refresh$.next(); // Trigger a refresh after deletion
      });
    }

    view(id: number) {
      console.log('View patient with ID:', id);
      this.router.navigate(['/view-patient', id]);
    }

    logout(){
      this.docauth.logout();
      this.router.navigate(['home']);
    }
}
