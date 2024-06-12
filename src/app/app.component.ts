import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet, RouterLinkActive, RouterLinkWithHref } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  constructor(private router: Router){}
  
  navigateToNotes() {
    this.router.navigate(['/notes']);
  }

  navigateToNote(id: number) {
    this.router.navigate(['/notes', id]);
  }  
}
