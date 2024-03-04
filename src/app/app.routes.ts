import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { EditPComponent } from './components/edit-p/edit-p.component';
import { Login1Component } from './components/login1/login1.component';
import { Login2Component } from './components/login2/login2.component';
import { IndexComponent } from './components/index/index.component';
import { Register4Component } from './components/register4/register4.component';
import { StandingComponent } from './components/standing/standing.component';


export const routes: Routes = [
    {path: 'profile', component: HeaderComponent},
    {path: 'edit', component: EditPComponent},
    {path: '', component: Login1Component},
    {path: 'login', component: Login2Component},
    {path: 'register', component: Register4Component},
    {path: 'rank', component: StandingComponent},
    {path: 'login2', component: IndexComponent}

];