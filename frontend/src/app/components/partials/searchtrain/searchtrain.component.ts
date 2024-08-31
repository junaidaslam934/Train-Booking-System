import { Component, EventEmitter, Output } from '@angular/core';
import { TrainAvailService } from '../../../services/train-avail.service';
import { Train } from '../../../shared/models/trains-availabe';

@Component({
  selector: 'app-searchtrain',
  templateUrl: './searchtrain.component.html',
  styleUrl: './searchtrain.component.css'
})
export class SearchtrainComponent {
  sourceTerm: string = '';
  destinationTerm: string = '';

  @Output() searchResults = new EventEmitter<Train[]>();

  constructor(private trainavail: TrainAvailService) { }

  search(source: string, destination: string): void {
    this.sourceTerm = source;
    this.destinationTerm = destination;

    if (source && destination) {
      this.trainavail.searchTrains(source, destination)
        .subscribe((results: Train[]) => {
          this.searchResults.emit(results);
          console.log("found")

        });
    } else {
      console.log('Please enter both source and destination');
    }
  }


}
