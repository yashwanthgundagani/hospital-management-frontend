import { Component } from '@angular/core';

@Component({
  selector: 'app-patient',
  standalone: false,
  templateUrl: './patient.html',
  styleUrl: './patient.css',
})
export class Patient {
  id: number=0;
  name: string='';
  age: string='';
  blood: string='';
  prescription: string='';
  dose: string='';
  fees: string='';
  urgency: string='';
}
