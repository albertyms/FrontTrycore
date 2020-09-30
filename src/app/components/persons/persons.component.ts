import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonsService } from 'src/app/services/persons.service';
import { Persons, ResponsePersons } from '../intefaces/persons';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styles: [
  ]
})
export class PersonsComponent implements OnInit {

  persons: Persons[] = [];

  constructor(public personService: PersonsService, private router: Router) { }

  ngOnInit(): void {
    this.personService.getPersons()
      .subscribe((res: any) => {
        this.persons.push(...res);
      });
  }

  viewPerson(person: any) {
    this.personService.personSel = person;
    console.log(this.personService.personSel);
    this.router.navigateByUrl('viewPerson');
    console.log(this.personService.personSel.id);
    this.personService.putUpdateCountVier(this.personService.personSel.id);
  }

  goCreatePerson() {
    this.router.navigateByUrl('/createPerson');
  }

}
