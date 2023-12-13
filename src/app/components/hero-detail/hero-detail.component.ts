import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../common/hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../../services/hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent implements OnInit {

  // declare hero property
  hero!: Hero | undefined;

  // Injecting some services into constructor
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  /**
   * Invoked after constructor and component inputs are initialized
   */
  ngOnInit(): void {
    this.getHero();
  }

  /**
   * Get URL paramerter value of id and converts into number type
   * Fetch matching hero data with the help of HeroService
   */
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id)
    this.heroService.getHero(id).subscribe(hh => this.hero = hh);

  }

  /**
   * Returns to last page
   */
  goBack(): void {
    this.location.back();
  }

  /**
   * If hero data is available, update hero data and return to previous page
   */
  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }
}
