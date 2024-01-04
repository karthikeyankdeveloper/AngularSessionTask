import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-booking-type',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './booking-type.component.html',
  styleUrl: './booking-type.component.scss'
})
export class BookingTypeComponent {

}
