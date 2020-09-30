
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ResponsePersons } from '../components/intefaces/persons';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  personSel: any;

  constructor(private http: HttpClient, private router: Router) { }

  getPersons() {
    return this.http.get(`${URL}/api/person`);
  }

  putUpdateCountVier(id: number) {
    const headers = {
    };

    const data = {
    };
    console.log(id);
    return this.http.put<ResponsePersons>(`${URL}/api/person/updateView/${id}`, data, {headers}).subscribe(() => {
      this.router.navigateByUrl('/homepage', { skipLocationChange: true })
        .then(() => this.router.navigate(['viewPerson']));
    });
  }

  createPerson(age: number,
    fullName: string,
    idNumber: number,
    height: number,
    weight: number,
    gender: number,
    birthDate: Date) {

    const headers = {
    };

    const data = {
        age,
        fullName,
        idNumber,
        height,
        weight,
        gender,
        birthDate
    };

    return this.http.post<ResponsePersons>(`${URL}/api/person`, data, { headers })
    .subscribe();
    
  }
}
