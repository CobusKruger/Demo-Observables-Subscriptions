import { Injectable } from '@angular/core';
import { Observable, from, of, Subscription, Subject } from 'rxjs';
import { map, delay, concatAll } from 'rxjs/operators';

export interface ISubEntry {
  index: number;
  primes: any[];
  subscription?: Subscription;
}

@Injectable({
  providedIn: 'root'
})
export class PrimeService {
  private primes = [];
  private maxPrime = 10000;
  private primesSubject = new Subject<number>(); // Allows us to emit values
  private primesObservable = this.primesSubject.asObservable(); // Allows subscribers to receive values but no manipulate the subject
  private counter = 1;
  constructor() {
    this.calculatePrimes();
    this.createPrimeSubject();
  }
  public getPrimes() {
    return this.primesObservable;
  }
  public createSubEntry(): ISubEntry {
    return {
      index: this.counter++,
      primes: []
    };
  }
  public complete() {
    this.primesSubject.complete(); // Stop subscribers from receiving any more values
  }
  private createPrimeSubject() {
    let index = 0;
    setInterval(() => { // Do this every second
      if (index < this.primes.length) {
        this.primesSubject.next(this.primes[index]); // Emit the next prime number
        index++;
      }
    }, 1000);
  }
  private calculatePrimes() {
    let current = 3;
    this.primes = [2];

    while (current < this.maxPrime) {
      const isPrime = !this.primes.find(prime => Number.isInteger(current / prime));
      if (isPrime) {
        this.primes.push(current);
      }
      current++;
    }
  }
}
