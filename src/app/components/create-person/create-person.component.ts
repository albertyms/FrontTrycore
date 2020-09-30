import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonsService } from 'src/app/services/persons.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styles: [
  ]
})
export class CreatePersonComponent implements OnInit {

  person = {
    age: 0,
    fullName: '',
    idNumber: 0,
    height: 0,
    weight: 0,
    gender: 0,
    birthDate: new Date()
  }

  constructor(public personService: PersonsService, private router: Router) { }

  ngOnInit(): void {
  }

  createPerson(f: NgForm) {

    console.log(f.value);
    
    this.personService.createPerson(
    this.person.age,
    this.person.fullName,
    this.person.idNumber,
    this.person.height,
    this.person.weight,
    this.person.gender,
    this.person.birthDate);

    this.person = null;

    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 2000
    });
    Toast.fire({
      title: 'Person created!',
      background: 'yellow'
    });

  }

}
