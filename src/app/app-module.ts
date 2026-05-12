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

@NgModule({
  declarations: [App, Admindash, Patient, AppointmentComponent, CreateAppointment],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, CommonModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
