import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationManagementComponent } from './features/destinations/components/destination-management/destination-management.component';

const routes: Routes = [
  { path: 'destinations', component: DestinationManagementComponent },
  { path: '', redirectTo: '/destinations', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }