import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;

  User: any = ['Super author', 'Admin', 'Reader'];



  constructor() { }

  ngOnInit() {
    this.registrationForm = new FormGroup(
      {
        Name: new FormControl(),
        Email: new FormControl()
       }
    );


  }
  onSubmit(){
    console.log(this.registrationForm);
  }

}
