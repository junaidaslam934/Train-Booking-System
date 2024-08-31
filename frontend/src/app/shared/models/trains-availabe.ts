export class Train {
    id!: string;               // Unique identifier for the train
    name!: string;             // Name of the train
    number!: string;           // Train number
    source!: string;           // Source station
    destination!: string;      // Destination station
    departureTime!: string;    // Departure time from the source station (in HH:mm format)
    arrivalTime!: string;      // Arrival time at the destination station (in HH:mm format)
    duration!: string;         // Total duration of the journey (e.g., "5h 30m")
    availableClasses!: string[]; // Array of available classes (e.g., ["Sleeper", "AC 3 Tier", "AC 2 Tier"])
    stops!: string[];          // List of intermediate stops between source and destination
    seatsAvailable!: number;   // Number of available seats in the selected class
    fare!: number;             // Fare for the selected class
    daysOfOperation!: string[]; // Days the train operates (e.g., ["Mon", "Tue", "Wed"])
    imageUrl?: string;         // Optional image URL for the train
  }
  