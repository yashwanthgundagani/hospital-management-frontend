import { Component } from '@angular/core';
import { MedicineService } from '../medicine-service';
import { Medicine } from '../medicine';
import { Observable, startWith, Subject, switchMap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicinelist',
  standalone: false,
  templateUrl: './medicinelist.html',
  styleUrls: ['./medicinelist.css'],
})
export class Medicinelist {
  constructor(private medicineService: MedicineService,
    private router: Router
  ) {}

  medicines$ !:Observable<Medicine[]>;
  private refresh$ = new Subject<void>();

  ngOnInit(): void {
    this.getMedicine();
  }
  
  getMedicine(){
    this.medicines$ = this.refresh$.pipe(startWith(void 0),
      switchMap(() => this.medicineService.getMedicineList()));
  }

  delete(id: number) {
      this.medicineService.deleteMedicine(id).subscribe((data) => {
        console.log('Deleted successfully', data);
        this.refresh$.next(); // Trigger a refresh after deletion
      });
    }

  update(id: number) {
      console.log('Update medicine with ID:', id);
      this.router.navigate(['/update-medicine', id]);
    }
}
