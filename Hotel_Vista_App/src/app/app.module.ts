import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthContextComponent } from './components/auth-context/auth-context.component';
import { LoginComponent } from './components/auth-context/login/login.component';
import { SignUpComponent } from './components/auth-context/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeContextComponent } from './components/dashboard/components/employee-context/employee-context.component';
import { UserContextComponent } from './components/dashboard/components/user-context/user-context.component';
import { BuffetTicketContextComponent } from './components/dashboard/components/buffet-ticket-context/buffet-ticket-context.component';
import { PayrollContextComponent } from './components/dashboard/components/payroll-context/payroll-context.component';
import { RoomContextComponent } from './components/dashboard/components/room-context/room-context.component';
import { ParkingContextComponent } from './components/dashboard/components/parking-context/parking-context.component';
import { ReservationContextComponent } from './components/dashboard/components/reservation-context/reservation-context.component';
import { RoomServiceContextComponent } from './components/dashboard/components/room-service-context/room-service-context.component';
import { CleaningContextComponent } from './components/dashboard/components/cleaning-context/cleaning-context.component';
import { TopBarComponent } from './components/dashboard/items/top-bar/top-bar.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ContactUsComponent } from './components/navigation/contact-us/contact-us.component';
import { FacilitiesComponent } from './components/navigation/facilities/facilities.component';
import { GalleryComponent } from './components/navigation/gallery/gallery.component';
import { HomeComponent } from './components/navigation/home/home.component';
import { RoomsComponent } from './components/navigation/rooms/rooms.component';
import { TeamComponent } from './components/navigation/team/team.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatTabsModule} from "@angular/material/tabs";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";


import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    AppComponent,
    AuthContextComponent,
    LoginComponent,
    SignUpComponent,
    DashboardComponent,
    EmployeeContextComponent,
    UserContextComponent,
    BuffetTicketContextComponent,
    PayrollContextComponent,
    RoomContextComponent,
    ParkingContextComponent,
    ReservationContextComponent,
    RoomServiceContextComponent,
    CleaningContextComponent,
    TopBarComponent,
    NavigationComponent,
    ContactUsComponent,
    FacilitiesComponent,
    GalleryComponent,
    HomeComponent,
    RoomsComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatTabsModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
