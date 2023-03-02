import { Car } from "@cars/interfaces/car.interface";
import { v4 as uuid } from 'uuid';

export const CARS_SEED : Car[] = [
    {
        id : uuid(),
        brand : 'Honda',
        model : 'Civic'
    },
    {
        id : uuid(),
        brand : 'toyota',
        model : 'Corola '
    },
    {
        id : uuid(),
        brand : 'Honda',
        model : 'Civic'
    },
    {
        id : uuid(),
        brand : 'Honda',
        model : 'Civic'
    },
    {
        id : uuid(),
        brand : 'Jeep',
        model : 'cheroky'
    }
]