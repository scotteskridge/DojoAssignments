import { Routes, RouterModule } from '@angular/router'
// import { LoginComponent } from './login/login.component';
import { NotesComponent } from './notes/notes.component'
import { PersonalComponent } from './notes/personal/personal.component'
import { PublicComponent } from './notes/public/public.component'
import { WidgetComponent } from './widget/widget.component'

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'widget', component: WidgetComponent},
    { path: 'notes', component: NotesComponent, children: [
        {path: 'personal', component: PersonalComponent },
        {path: 'public', component: PublicComponent},
        {path: ':id', component: PublicComponent},
    ]},
   
];
export const routing = RouterModule.forRoot(APP_ROUTES);