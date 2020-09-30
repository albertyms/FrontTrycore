import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlanetsService } from 'src/app/services/planets.service';
import { Planets } from '../intefaces/planets';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styles: [
  ]
})
export class PlanetsComponent implements OnInit {

  planets: Planets[] = [];

  constructor(public planetService: PlanetsService, private router: Router) { }

  ngOnInit(): void {
    this.planetService.getPlanets()
      .subscribe((res: any) => {
        console.log(res);
        this.planets.push(...res);
      });
  }

  viewPerson(planet: any) {
    this.planetService.planetSel = planet;
    console.log(this.planetService.planetSel);
    this.router.navigateByUrl('viewPlanet');
    console.log(this.planetService.planetSel.id);
    this.planetService.putUpdateCountVier(this.planetService.planetSel.id);
  }

}
