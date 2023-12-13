import { Component, OnInit } from '@angular/core';
import { Hero } from '../../common/hero';
import { NgFor } from '@angular/common';
import { HeroService } from '../../services/hero.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService,
    private messageService: MessageService) { }

  // let Angular call ngOnInit() at an appropriate time after constructing a HeroesComponent instance.
  ngOnInit(): void {
    this.getHeros();
  }

  // Declare heroes array
  heroes: Hero[] = [];


  getHeros(): void {

    // This waits for the Observable to emit the array of heroes, which could happen now or several minutes from now. 
    // The subscribe() method passes the emitted array to the callback, which sets the component's heroes property.
    this.heroService.getHeroes().subscribe(
      h => this.heroes = h
    );
  }

  /**
   * Add new hero if hero name is not null or defined
   * @param name 
   * @returns 
   */
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  /**
   * Delete hero
   * @param hero 
   */
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }


}