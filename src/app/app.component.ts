import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

interface User {
  name: string,
  email: string
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  user: any = {
    name: "",
    email: ""
  }

  submitForm(form: NgForm){
    if (form.valid) {
      console.log(form.value, this.user)
    }
  }

  validateEmail(): boolean{
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    return emailRegex.test(this.user.email);
  }
}
