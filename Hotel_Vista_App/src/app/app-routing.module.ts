import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavigationComponent} from "./components/navigation/navigation.component";
import {HomeComponent} from "./components/navigation/home/home.component";
import {RoomsComponent} from "./components/navigation/rooms/rooms.component";
import {FacilitiesComponent} from "./components/navigation/facilities/facilities.component";
import {GalleryComponent} from "./components/navigation/gallery/gallery.component";
import {TeamComponent} from "./components/navigation/team/team.component";
import {ContactUsComponent} from "./components/navigation/contact-us/contact-us.component";
import {AuthContextComponent} from "./components/auth-context/auth-context.component";
import {LoginComponent} from "./components/auth-context/login/login.component";
import {SignUpComponent} from "./components/auth-context/sign-up/sign-up.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {EmployeeContextComponent} from "./components/dashboard/components/employee-context/employee-context.component";
import {UserContextComponent} from "./components/dashboard/components/user-context/user-context.component";
import {BuffetTicketContextComponent} from "./components/dashboard/components/buffet-ticket-context/buffet-ticket-context.component";
import {PayrollContextComponent} from "./components/dashboard/components/payroll-context/payroll-context.component";
import {RoomContextComponent} from "./components/dashboard/components/room-context/room-context.component";
import {ParkingContextComponent} from "./components/dashboard/components/parking-context/parking-context.component";
import {ReservationContextComponent} from "./components/dashboard/components/reservation-context/reservation-context.component";
import {RoomServiceContextComponent} from "./components/dashboard/components/room-service-context/room-service-context.component";
import {CleaningContextComponent} from "./components/dashboard/components/cleaning-context/cleaning-context.component";

const routes: Routes = [
  {path: '',redirectTo:'/navigation/home',pathMatch:'full'},
  {path: 'navigation',component:NavigationComponent, children:[
      {path: 'home',component:HomeComponent},
      {path: 'rooms',component:RoomsComponent},
      {path: 'facilities',component:FacilitiesComponent},
      {path: 'gallery',component:GalleryComponent},
      {path: 'team',component:TeamComponent},
      {path: 'contact',component:ContactUsComponent}
    ]
  },
  {path: 'auth-context', component: AuthContextComponent, children: [
      {path: 'login', component: LoginComponent},
      {path: 'signUp', component: SignUpComponent}
    ]
  },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      {path: '', redirectTo: '/dashboard/employee-context', pathMatch: 'full'},
      {path: 'employee-context', component: EmployeeContextComponent},
      {path: 'user-context', component: UserContextComponent},
      {path: 'buffetTicket-context', component: BuffetTicketContextComponent},
      {path: 'payroll-context', component: PayrollContextComponent},
      {path: 'room-context', component: RoomContextComponent},
      {path: 'parking-context', component: ParkingContextComponent},
      {path: 'reservation-context', component: ReservationContextComponent},
      {path: 'roomService-context', component: RoomServiceContextComponent},
      {path: 'cleaning-context', component: CleaningContextComponent},
    ]
  }
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
