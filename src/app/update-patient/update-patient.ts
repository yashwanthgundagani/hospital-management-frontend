import { ChangeDetectorRef, Component} from '@angular/core';
import { PatientService } from '../patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../patient';

@Component({
  selector: 'app-update-patient',
  standalone: false,
  templateUrl: './update-patient.html',
  styleUrls: ['./update-patient.css'],
})
export class UpdatePatient {
  patient: Patient=new Patient();
  id: number=0;
  isLoaded: boolean = false;

  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef 
  ) {}


ngOnInit(): void {
  this.id = this.route.snapshot.params['id'];
  console.log("ID:", this.id);
  this.patientService.getPatientById(this.id).subscribe({
    next: (data) => {
    this.patient = data;
    this.isLoaded = true;
    this.cdr.detectChanges(); 
    console.log("Patient loaded for update:", this.patient);
    },
    error: (error) => {
      console.error("Failed to load patient:", error);
    }
  });
}
 
onSubmit() {
  if(!this.patient) return;
  this.updatePatient(this.id, this.patient); 
}

  updatePatient(id: number, patient: Patient) {
  console.log("Update patient with ID:", id);
  this.patientService.updatePatient(id, patient)
    .subscribe({
      next:data => {
        console.log("Patient updated successfully:", data);
        this.router.navigate(['/docdash']);
      },
      error: error => {
        console.error("Failed to update patient:", error);
      }
    });
}
}
