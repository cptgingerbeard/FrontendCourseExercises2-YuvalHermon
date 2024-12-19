import { Component } from '@angular/core';
import { DestinationManagementComponent } from './features/destinations/components/destination-management/destination-management.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DestinationManagementComponent], // Import standalone component here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
