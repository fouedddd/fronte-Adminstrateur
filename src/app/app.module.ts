import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AjoutadminComponent } from './pages/Adminstrateur/ajoutadmin/ajoutadmin.component';
import { ModifadminComponent } from './pages/Adminstrateur/modifadmin/modifadmin.component';
import { ListadminComponent } from './pages/Adminstrateur/listadmin/listadmin.component';
import { ListclientComponent } from './pages/Client/listclient/listclient.component';
import { AjoutDABComponent } from './pages/DAB/ajout-dab/ajout-dab.component';
import { ModiftDABComponent } from './pages/DAB/modift-dab/modift-dab.component';
import { ListDABComponent } from './pages/DAB/list-dab/list-dab.component';
import { ListMessageComponent } from './pages/Message/list-message/list-message.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule  } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AjoutClientComponent } from './pages/Client/ajout-client/ajout-client.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { RecoverpwComponent } from './pages/recoverpw/recoverpw.component';
import { MatButtonModule } from '@angular/material/button';
import { LogoutComponent } from './pages/logout/logout.component';
import { ConfirmationDialogConfirmationComponent } from './pages/confirmation-dialog-confirmation/confirmation-dialog-confirmation.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgChartsModule } from 'ng2-charts';
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
    ListclientComponent,
    AjoutDABComponent,
    ModiftDABComponent,
    ListDABComponent,
    ListMessageComponent,
    LoginComponent,
    RegisterComponent,
    AjoutClientComponent,
    RecoverpwComponent,
    LogoutComponent,
    ConfirmationDialogConfirmationComponent,
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   MatDialogModule,
   BrowserAnimationsModule,
   MatFormFieldModule,
   MatInputModule,
   MatButtonModule,
   MatSnackBarModule,
   NgChartsModule
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
