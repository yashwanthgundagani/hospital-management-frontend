import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Medicine {
  id: number=0;
  drugName: string = '';
  stock: string='';
}
