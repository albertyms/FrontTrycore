import { Component, OnInit } from '@angular/core';
import { PlanetsService } from 'src/app/services/planets.service';

@Component({
  selector: 'app-view-planet',
  templateUrl: './view-planet.component.html',
  styles: [
  ]
})
export class ViewPlanetComponent implements OnInit {

  constructor(public planetService: PlanetsService) { }

  ngOnInit(): void {
  }

  back() {
    window.history.back();
  }

}
