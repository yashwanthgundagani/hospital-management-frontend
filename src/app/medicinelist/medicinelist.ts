import { Component } from '@angular/core';
import { MedicineService } from '../medicine-service';
import { Medicine } from '../medicine';
import { Observable, startWith, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-medicinelist',
  standalone: false,
  templateUrl: './medicinelist.html',
  styleUrls: ['./medicinelist.css'],
})
export class Medicinelist {
  constructor(private medicineService: MedicineService) {}

  medicines$ !:Observable<Medicine[]>;
  private refresh$ = new Subject<void>();

  ngOnInit(): void {
    this.getMedicine();
  }
  
  getMedicine(){
    this.medicines$ = this.refresh$.pipe(startWith(void 0),
      switchMap(() => this.medicineService.getMedicineList()));
  }
}
