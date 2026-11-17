import { Routes } from '@angular/router';
import { Login } from '../components/login/login';
import { Home } from '../components/home/home';
import { Logout } from '../components/logout/logout';
import { Profile } from '../components/profile/profile';
import { Registration } from '../components/registration/registration';
import { Tasks } from '../components/tasks/tasks';
import { Notfound } from '../components/notfound/notfound';

export const routes: Routes = [
    {path: 'home', component: Home},
    {path: 'registration', component: Registration},
    {path: 'profile', component: Profile},
    {path: 'login', component: Login},
    {path: 'tasks', component: Tasks},
    {path: 'logout', component: Logout},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', component: Notfound}
];
