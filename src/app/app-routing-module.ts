import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Admindash } from './admindash/admindash';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointment } from './create-appointment/create-appointment';
import { Home } from './home/home';
import { Docdash } from './docdash/docdash';
import { CreatePatient } from './create-patient/create-patient';
import { Medicinelist } from './medicinelist/medicinelist';
import { CreateMedicine } from './create-medicine/create-medicine';
import { UpdatePatient } from './update-patient/update-patient';
import { ViewPatient } from './view-patient/view-patient';
import { UpdateMedicine } from './update-medicine/update-medicine';

const routes: Routes = [{
  path:'admin',component:Admindash},
{path:'appointmentlist',component:AppointmentComponent},
{path:'create-appointment',component:CreateAppointment},
{path:'home',component:Home},
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'docdash',component:Docdash},
{path:'create-patient',component:CreatePatient},
{path:'medicine-list',component:Medicinelist},
{path:'create-medicine',component:CreateMedicine},
{path:'update-patient/:id',component:UpdatePatient},
{path:'view-patient/:id',component:ViewPatient},
{path:'update-medicine/:id',component:UpdateMedicine}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
