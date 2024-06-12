import { Routes } from '@angular/router';
import { NotesComponent } from './components/notes/notes.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NoteComponent } from './components/note/note.component';
import { AboutComponent } from './components/about/about.component';
import { AboutProjectsComponent } from './components/about-projects/about-projects.component';
import { AboutSponsersComponent } from './components/about-sponsers/about-sponsers.component';

export const routes: Routes = [
    {
        path: '', title: "home", component: NotesComponent
    },
    {
        path: 'notes', title: "Notes", component: NotesComponent
    },
    {
        path: 'notes/:id', title: "Note", component: NoteComponent
    },
    {
        path: 'about',  
        title:'about', 
        component: AboutComponent, 
        children: [
            {path: "projects", title: "AboutProjects", component: AboutProjectsComponent},
            {path: "sponsers", title: "AboutSponsers", component: AboutSponsersComponent}
        ]
    },
    {
        path: '**', component: PageNotFoundComponent, title:'404 - Page not found'
    }
];
