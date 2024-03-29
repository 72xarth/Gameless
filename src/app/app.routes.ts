import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { EditPComponent } from './components/edit-p/edit-p.component';
import { Login1Component } from './components/login1/login1.component';
import { Login2Component } from './components/login2/login2.component';
import { IndexComponent } from './components/index/index.component';
import { Register4Component } from './components/register4/register4.component';
import { StandingComponent } from './components/standing/standing.component';
import { UploadComponent } from './components/upload/upload.component';
import { GraphComponent } from './components/graph/graph.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdProComponent } from './components/ad-pro/ad-pro.component';


export const routes: Routes = [
    {path: 'profile', component: HeaderComponent},
    {path: 'edit', component: EditPComponent},
    {path: '', component: Login1Component},
    {path: 'login', component: Login2Component},
    {path: 'register', component: Register4Component},
    {path: 'rank', component: StandingComponent},
    {path: 'upload', component: UploadComponent},
    {path: 'login2', component: IndexComponent},
    {path: 'graph/:id', component: GraphComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'adpro/:id', component: AdProComponent}
    

];