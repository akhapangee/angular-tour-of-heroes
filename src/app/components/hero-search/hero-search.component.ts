import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../common/hero';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrl: './hero-search.component.css'
})
export class HeroSearchComponent {
  
  // Declare property of Observable type
  //  We use the ! operator to assert that the said value is not null or undefined .
  heroes$!: Observable<Hero[]>;

  // A Subject is both a source of observable values and an Observable itself. You can subscribe to a Subject as you would any Observable.
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) { }

  // Push a search term into the observable stream using next() method
  // Every time the user types in the text box, the binding calls search() with the text box value as a search term. 
  // The searchTerms becomes an Observable emitting a steady stream of search terms.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  /**
   * Passing a new search term directly to the searchHeroes() after every user keystroke creates excessive HTTP requests, 
   * which taxes server resources and burns through data plans.
   */
  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }
}
