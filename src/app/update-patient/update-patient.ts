import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../patient/patient';

@Component({
  selector: 'app-update-patient',
  standalone: false,
  templateUrl: './update-patient.html',
  styleUrls: ['./update-patient.css'],
})
export class UpdatePatient implements OnInit {
  patient: Patient=new Patient();
  id: number=0;

  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute,
    private router: Router
  ) {}


ngOnInit(): void {
  this.id = Number(this.route.snapshot.paramMap.get('id'));
  console.log("ID:", this.id);
  this.patientService.getPatientById(this.id).subscribe(data => {
    console.log("API gatientbyid data:", data);
    this.patient = data;
  });
}
 
onSubmit() {
  this.updatePatient(this.id, this.patient); 
}

  updatePatient(id: number, patient: Patient) {
      if (!this.patient) return; // ✅ important
  console.log("Update patient with ID:", id);
  this.patientService.updatePatient(this.id, this.patient)
    .subscribe(data => {
      console.log("Updated successfully", data);
    });
  this.router.navigate(['/docdash']);
}
}
