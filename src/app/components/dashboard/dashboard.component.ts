import { Component, OnInit } from '@angular/core';
import { Hero } from '../../common/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  // declare empty heroes array
  heroes: Hero[] = [];

  // Injecting heroService through constructor
  constructor(private heroService: HeroService) { }

  /* ngOnInit() is a lifecycle hook in Angular that is called after the constructor is called and after the component’s 
  inputs have been initialized. It is used to perform any additional initialization that is required for the component. 
  ngOnInit is commonly used to call services or to set up subscriptions. 
  */
  ngOnInit(): void {
    this.getHeroes();
  }


  /*
  Fetch a list of top 4 heroes (slice(1,5))
  subscribe() method subscribes to values published by Observable
   */
  private getHeroes() {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
