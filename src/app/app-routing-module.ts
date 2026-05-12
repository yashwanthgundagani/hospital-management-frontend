import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Admindash } from './admindash/admindash';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointment } from './create-appointment/create-appointment';

const routes: Routes = [{
  path:'admin',component:Admindash},
{path:'appointmentlist',component:AppointmentComponent},
{path:'create-appointment',component:CreateAppointment}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
