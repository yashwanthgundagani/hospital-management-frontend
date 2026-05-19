import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../patient';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-patient',
  standalone: false,
  templateUrl: './view-patient.html',
  styleUrls: ['./view-patient.css'],
})
export class ViewPatient {
  id:number=0;
  patient$!: Observable<Patient>;
  constructor(private patientService: PatientService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.patient$ = this.patientService.getPatientById(this.id);
  }
}
