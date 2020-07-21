import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';
import { Payload } from './Payload';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass(items: Payload[]): number { 
        let total = 0;
        for (let i: number = 0; i < items.length; i++) {
            total += items[i].massKg;
        }
        return total;
     }

    currentMassKg(): number {
        const totalMassOfCargoItems: number = this.sumMass(this.cargoItems);
        const totalAstroMass: number = this.sumMass(this.astronauts);
        return totalAstroMass + totalMassOfCargoItems;
    }

    canAdd(item: Payload): boolean {
        let totalMassWithItem: number = this.currentMassKg() + item.massKg;
        return totalMassWithItem <= this.totalCapacityKg;
    }

    addCargo(item: Cargo): boolean {
        if (this.canAdd(item)) {
            this.cargoItems.push(item);
            return true;
        } else {
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut): boolean{
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }    
 }