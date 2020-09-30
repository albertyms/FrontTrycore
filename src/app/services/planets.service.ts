import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ResponsePlanets } from '../components/intefaces/planets';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  planetSel: any;

  constructor(private http: HttpClient, private router: Router) { }

  getPlanets() {
    return this.http.get(`${URL}/api/planet`);
  }

  putUpdateCountVier(id: number) {
    const headers = {
    };

    const data = {
    };
    console.log(id);
    return this.http.put<ResponsePlanets>(`${URL}/api/planet/updateView/${id}`, data, {headers}).subscribe(() => {
      this.router.navigateByUrl('/homepage', { skipLocationChange: true })
        .then(() => this.router.navigate(['viewPlanet']));
    });
  }
}
