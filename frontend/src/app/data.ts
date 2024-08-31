import { Train } from '../app/shared/models/trains-availabe';

export const TRAIN_DATA: Train[] = [
  {
    id: '1',
    name: 'Rajdhani Express',
    number: '12345',
    source: 'New Delhi',
    destination: 'Mumbai Central',
    departureTime: '17:30',
    arrivalTime: '08:45',
    duration: '15h 15m',
    availableClasses: ['Sleeper', 'AC 3 Tier', 'AC 2 Tier'],
    stops: ['Kota', 'Vadodara', 'Surat'],
    seatsAvailable: 20,
    fare: 1500,
    daysOfOperation: ['Mon', 'Wed', 'Fri'],
    imageUrl: 'assets/images/rajdhani-express.jpg'
  },
  {
    id: '2',
    name: 'Shatabdi Express',
    number: '12002',
    source: 'Chennai Central',
    destination: 'Bangalore City',
    departureTime: '06:00',
    arrivalTime: '11:00',
    duration: '5h 0m',
    availableClasses: ['Chair Car', 'Executive Class'],
    stops: ['Katpadi', 'Jolarpettai', 'Krishnarajapuram'],
    seatsAvailable: 50,
    fare: 800,
    daysOfOperation: ['Tue', 'Thu', 'Sat'],
    imageUrl: 'assets/images/shatabdi-express.jpg'
  },
  {
    id: '3',
    name: 'Duronto Express',
    number: '22209',
    source: 'Howrah Junction',
    destination: 'shikapur',
    departureTime: '20:00',
    arrivalTime: '12:30',
    duration: '16h 30m',
    availableClasses: ['Sleeper', 'AC 3 Tier', 'AC 1 Tier'],
    stops: ['Nagpur', 'Bhusaval'],
    seatsAvailable: 10,
    fare: 2000,
    daysOfOperation: ['Sun', 'Tue', 'Thu'],
    imageUrl: 'assets/images/duronto-express.jpg'
  },
  {
    id: '1',
    name: 'run express',
    number: '12345',
    source: 'New Delhi',
    destination: 'Mumbai Central',
    departureTime: '17:30',
    arrivalTime: '08:45',
    duration: '15h 15m',
    availableClasses: ['Sleeper', 'AC 3 Tier', 'AC 2 Tier'],
    stops: ['Kota', 'Vadodara', 'Surat'],
    seatsAvailable: 20,
    fare: 1500,
    daysOfOperation: ['Mon', 'Wed', 'Fri'],
    imageUrl: 'assets/images/rajdhani-express.jpg'
  }
];
