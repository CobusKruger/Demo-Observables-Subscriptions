import { Component, OnInit } from '@angular/core';
import { PrimeService, ISubEntry } from '../prime.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-subscribe-unsubscribe',
  templateUrl: './subscribe-unsubscribe.component.html',
  styleUrls: ['./subscribe-unsubscribe.component.scss']
})
export class SubscribeUnsubscribeComponent implements OnInit {
  subs: ISubEntry[] = []; // A list of subscriptions and the number of primes it knows about

  constructor(private primeService: PrimeService) { }

  addSubscriber() {
    const entry = this.primeService.createSubEntry(); // A new ISubEntry will keep track of its own list of primes and have a unique index
    entry.subscription = this.primeService.getPrimes().subscribe(item => {
      console.info(`Sub ${entry.index} received ${item}`);
      entry.primes.push(item);
    });
    this.subs.push(entry);
  }
  removeSubscriber() {
    const target = this.subs.pop();
    if (target) {
      target.subscription.unsubscribe(); // This stops the actual subscription
    }
  }
  completeObservable() {
    this.primeService.complete();
  }

  ngOnInit() {
  }

}
