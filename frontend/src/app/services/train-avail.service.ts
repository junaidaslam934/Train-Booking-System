import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Train } from '../shared/models/trains-availabe';
;
import { TRAIN_DATA } from '../data';



@Injectable({
  providedIn: 'root'
})
export class TrainAvailService {

  constructor() { }
  searchTrains(source: string, destination: string): Observable<Train[]> {
    // Simulate a search based on the dummy data
    const results = TRAIN_DATA.filter(train =>
      train.source.toLowerCase().includes(source.toLowerCase()) &&
      train.destination.toLowerCase().includes(destination.toLowerCase())
    );
    return of(results);
  }

}
