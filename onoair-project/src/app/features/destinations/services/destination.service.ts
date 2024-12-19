
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Destination } from '../../../core/models/destination.model';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {
  private destinations: Destination[] = [
    {
      id: 1,
      destinationName: 'New York',
      imageUrl: 'assets/newyork.jpg',
      airportName: 'John F. Kennedy International Airport',
      airportSite: 'https://www.jfkairport.com',
      email: 'info@jfkairport.com',
      destinationCode: 'JFK'
    },
    {
      id: 2,
      destinationName: 'London',
      imageUrl: 'assets/london.jpg',
      airportName: 'Heathrow Airport',
      airportSite: 'https://www.heathrow.com',
      email: 'info@heathrow.com',
      destinationCode: 'LHR'
    }
  ];

  private destinationsSubject = new BehaviorSubject<Destination[]>(this.destinations);

  getDestinations(): Observable<Destination[]> {
    return this.destinationsSubject.asObservable();
  }

  getDestinationById(id: number): Destination | undefined {
    return this.destinations.find(dest => dest.id === id);
  }

  addDestination(newDestination: Destination): void {
    this.destinations.push(newDestination);
    this.destinationsSubject.next(this.destinations);
  }

  updateDestination(id: number, updatedData: Partial<Destination>): void {
    const index = this.destinations.findIndex(dest => dest.id === id);
    if (index !== -1) {
      this.destinations[index] = { ...this.destinations[index], ...updatedData };
      this.destinationsSubject.next(this.destinations);
    }
  }

  deleteDestination(id: number): void {
    this.destinations = this.destinations.filter(dest => dest.id !== id);
    this.destinationsSubject.next(this.destinations);
  }
}
