import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AjoutadminComponent } from './Pages/Adminstrateur/ajoutadmin/ajoutadmin.component';
import { ListadminComponent } from './pages/Adminstrateur/listadmin/listadmin.component';
import { ModifadminComponent } from './pages/Adminstrateur/modifadmin/modifadmin.component';
import { ListclientComponent } from './pages/Client/listclient/listclient.component';
import { AjoutDABComponent } from './pages/DAB/ajout-dab/ajout-dab.component';
import { ModiftDABComponent } from './pages/DAB/modift-dab/modift-dab.component';
import { LoginComponent } from './pages/login/login.component';
import { ListMessageComponent } from './pages/Message/list-message/list-message.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
{
  path:'login',
component: LoginComponent
},

{
  path:'ajoutAdmin',
  component:AjoutadminComponent
},
{
  path:'listAdmin',
  component:ListadminComponent
},
{
  path:'modifadmin/:id',
  component:ModifadminComponent
},
{
  path:'listClient',
  component:ListclientComponent
},
{
  path:'ajoutDAB',
  component:AjoutDABComponent
},
{
  path:'messages',
  component:ListMessageComponent
},
{
  path:'dashbord',
  component:HomeComponent
},
{
  path:'ModifDAB',
  component:ModiftDABComponent
},
{
  path:'register',
  component:RegisterComponent
},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
