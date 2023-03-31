import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AjoutadminComponent } from './Pages/Adminstrateur/ajoutadmin/ajoutadmin.component';
import { ModifadminComponent } from './pages/Adminstrateur/modifadmin/modifadmin.component';
import { ListadminComponent } from './pages/Adminstrateur/listadmin/listadmin.component';
import { ModifclientComponent } from './pages/Client/modifclient/modifclient.component';
import { ListclientComponent } from './pages/Client/listclient/listclient.component';
import { AjoutDABComponent } from './pages/DAB/ajout-dab/ajout-dab.component';
import { ModiftDABComponent } from './pages/DAB/modift-dab/modift-dab.component';
import { ListDABComponent } from './pages/DAB/list-dab/list-dab.component';
import { ListMessageComponent } from './pages/Message/list-message/list-message.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    AjoutadminComponent,
    ModifadminComponent,
    ListadminComponent,
    ModifclientComponent,
    ListclientComponent,
    AjoutDABComponent,
    ModiftDABComponent,
    ListDABComponent,
    ListMessageComponent,
    LoginComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
