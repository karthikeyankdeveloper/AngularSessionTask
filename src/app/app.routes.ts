import { Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BookingTypeComponent } from './components/booking-type/booking-type.component';
import { FlightComponent } from './components/booking/flight/flight.component';
import { CarComponent } from './components/booking/car/car.component';
import { BusComponent } from './components/booking/bus/bus.component';
import { HotelComponent } from './components/booking/hotel/hotel.component';
import { EmployeeComponent } from './components/employee/employee.component';

export const routes: Routes = [

  {
    path:'',
    component:NavbarComponent,
    children:[
      {
        path:'',
        component:BookingTypeComponent,
        children:[
          {
            path:'',
            component:FlightComponent
          },
          {
            path:'car',
            component:CarComponent
          },
          {
            path:'bus',
            component:BusComponent
          },
          {
            path:'hotel',
            component:HotelComponent
          },
          {
            path:'employee',
            component:EmployeeComponent
          },
        ]
      }
    ]
  },
  {
    path:'**',
    redirectTo:'/',
    pathMatch:'full'
  }
];
