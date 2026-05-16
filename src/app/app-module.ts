import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Admindash } from './admindash/admindash';
import { Patient } from './patient/patient';
import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointment } from './create-appointment/create-appointment';
import { Home } from './home/home';
import { Docdash } from './docdash/docdash';
import { CreatePatient } from './create-patient/create-patient';
import { Medicinelist } from './medicinelist/medicinelist';

@NgModule({
  declarations: [
    App,
    Admindash,
    Patient,
    AppointmentComponent,
    CreateAppointment,
    Home,
    Docdash,
    CreatePatient,
    Medicinelist,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, CommonModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
