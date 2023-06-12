import { ToastsService } from './../../shared/services/toasts.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userForm: FormGroup;
  selectedHobbies: any = [];
  formSubmitted: boolean = false;

  educationDropdown = [
    {name: 'High School', id: 'HS'},
    {name: 'College', id: 'College'},
    {name: 'Graduate', id: 'Graduate'}
  ];

  hobbies = [
    {name: 'Reading', value: 'reading'},
    {name: 'Travelling', value: 'travelling'},
    {name: 'Coding', value: 'coding'},
  ];
  
  constructor(
    private formBuilder: FormBuilder,
    private toastsService: ToastsService,
  ) { }

  ngOnInit() {
    this.defineForm();
  }

  defineForm(){
    this.userForm = this.formBuilder.group({
      firstname: ['', [Validators.required]],
      middlename: [''],
      lastname: ['', [Validators.required]],
      DOB: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      educationLevel: [null, [Validators.required]],
      multiselect: [null],
      address: ['', [Validators.required]],
      gender: ['male', [Validators.required]],
      hobbies: ['', [Validators.required]]
    });
  }

  submitUserForm(){
    this.formSubmitted = true;
    if(this.userForm.valid){
      console.log('value', this.userForm.value);
      this.toastsService.success('Record Added !')
      this.userForm.reset();
      this.formSubmitted = false;
    }else{
      this.toastsService.error('Fill all the fields properly !')
    }
  }

  checkBoxChange(event: any, hobbies: string){
    if(event.checked.toString() === hobbies){
      this.selectedHobbies.push(hobbies)
    }else{
      const index = this.selectedHobbies.indexOf(hobbies);
      this.selectedHobbies.splice(index, 1);
    }
    this.userForm.controls['hobbies'].setValue(this.selectedHobbies.toString());
  }
}
