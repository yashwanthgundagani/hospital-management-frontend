import { ChangeDetectorRef, Component } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-medicine',
  standalone: false,
  templateUrl: './update-medicine.html',
  styleUrl: './update-medicine.css',
})
export class UpdateMedicine {
  medicine: Medicine=new Medicine();
    id: number=0;
    isLoaded: boolean = false;
  
    constructor(
      private medicineService: MedicineService,
      private route: ActivatedRoute,
      private router: Router,
      private cdr: ChangeDetectorRef 
    ) {}
  
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log("ID:", this.id);
    this.medicineService.getMedicineById(this.id).subscribe({
      next: (data) => {
      this.medicine = data;
      this.isLoaded = true;
      this.cdr.detectChanges(); 
      console.log("Medicine loaded for update:", this.medicine);
      },
      error: (error) => {
        console.error("Failed to load medicine:", error);
      }
    });
  }
   
  onSubmit() {
    if(!this.medicine) return;
    this.updateMedicine(this.id, this.medicine); 
  }
  
  updateMedicine(id: number, medicine: Medicine) {
  console.log("Update medicine with ID:", id);
  this.medicineService.updateMedicine(id, medicine)
    .subscribe({
      next:data => {
        console.log("Medicine updated successfully:", data);
        this.router.navigate(['/medicine-list']);
      },
      error: error => {
        console.error("Failed to update medicine:", error);
      }
    });
  }
}
