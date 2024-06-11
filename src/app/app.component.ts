import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgFor } from '@angular/common';
import { TaskComponent } from './componets/task/task.component';

interface User {
  name: string,
  email: string
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, ReactiveFormsModule, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
    tasks: string[] = ["Brech my teeth", "Playing Football", "Giong to the mosque"];

    deleteTask(task: string) {
      this.tasks = this.tasks.filter((t) => t !== task);
    }
}
