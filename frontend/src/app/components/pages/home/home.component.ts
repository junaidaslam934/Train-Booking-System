import { Component, EventEmitter, Output } from '@angular/core';
import { TrainAvailService } from '../../../services/train-avail.service';
import { Train } from '../../../shared/models/trains-availabe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  trains: Train[] = [];

  updateTrains(results: Train[]): void {
    this.trains = results;
  }


}
