import { Component } from '@angular/core';
import { MedicineService } from '../medicine-service';
import { CreateMedicineDto } from '../create-medicine-dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-medicine',
  standalone: false,
  templateUrl: './create-medicine.html',
  styleUrls: ['./create-medicine.css'],
})
export class CreateMedicine {
  medicine: CreateMedicineDto = new CreateMedicineDto();
  constructor(private medicineService: MedicineService,private router: Router) {}

  onSubmit(){
    console.log('Medicine Form submitted!', this.medicine);
    this.saveMedicine();
  }

  saveMedicine() {
    this.medicineService.createMedicine(this.medicine).subscribe({
      next: (data) => { console.log('Success:', data);
        this.goToMedicineList();
       },
      error: (error) => { console.error('API Error:', error); }
    });
  }

  goToMedicineList(){
    // Implement navigation to medicine list page
    this.router.navigate(['/medicine-list']);
  }
}
