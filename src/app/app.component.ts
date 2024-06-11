import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgFor } from '@angular/common';

interface User {
  name: string,
  email: string
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)]],
      adress: this.formBuilder.group({
        street: ['', Validators.required],
        city: ['', Validators.required]
      }),
      phoneNumber: this.formBuilder.array([
        this.formBuilder.control('', [
          Validators.required,
          Validators.pattern(/^\d{10}$/)
        ])
      ])
    })
  }

  get phoneNumber() {
    return this.userForm.get('phoneNumber') as FormArray;
  }

  addPhoneNumber() {
    this.phoneNumber.push(this.formBuilder.control('', [
      Validators.required,
      Validators.pattern(/^\d{10}$/)
    ]));
  }

  removePhoneNumber(index: number) {
    this.phoneNumber.removeAt(index);
  }

  submitForm() {
    if (this.userForm.valid) {
        console.log(this.userForm.value)
    }
  }

}
