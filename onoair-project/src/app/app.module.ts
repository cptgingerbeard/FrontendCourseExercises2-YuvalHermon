import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { DestinationManagementComponent } from './features/destinations/components/destination-management/destination-management.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: 'destinations', component: DestinationManagementComponent },
      // Add other routes as needed
    ]),
    importProvidersFrom(
      BrowserAnimationsModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatTableModule,
      MatSortModule,
      MatPaginatorModule,
      MatIconModule
    ),
  ],
}).catch((err) => console.error(err));
