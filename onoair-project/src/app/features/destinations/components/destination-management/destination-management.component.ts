import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Destination } from '../../../../core/models/destination.model';
import { DestinationService } from '../../services/destination.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-destination-management', // Note: this should match your HTML tag
  templateUrl: './destination-management.component.html',
  styleUrls: ['./destination-management.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ]
})


export class DestinationManagementComponent implements OnInit {
  displayedColumns: string[] = ['destinationName', 'destinationCode', 'airportName', 'actions'];
  dataSource: MatTableDataSource<Destination>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private destinationService: DestinationService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.destinationService.getDestinations().subscribe(destinations => {
      this.dataSource.data = destinations;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  viewDestinationDetails(destination: Destination): void {
    console.log('View destination details:', destination);
    // TODO: Implement view details modal or navigation
  }
}