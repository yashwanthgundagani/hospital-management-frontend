import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Admindash } from './admindash/admindash';
import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
import { Doclogin } from './doclogin/doclogin';
import { Adlogin } from './adlogin/adlogin';

@NgModule({
  declarations: [
    App,
    Admindash,
    AppointmentComponent,
    CreateAppointment,
    Home,
    Docdash,
    CreatePatient,
    Medicinelist,
    CreateMedicine,
    UpdatePatient,
    ViewPatient,
    UpdateMedicine,
    Doclogin,
    Adlogin,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, CommonModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
