import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Adminstrateur } from 'src/app/model/adminstrateur.model';
import { AdminstrateurService } from 'src/app/services/adminstrateur.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-ajoutadmin',
  templateUrl: './ajoutadmin.component.html',
  styleUrls: ['./ajoutadmin.component.css']
})
export class AjoutadminComponent implements OnInit {


  newAdminstrateur = new Adminstrateur();
  id!: number;
  type: boolean;
  constructor(private adminservice: AdminstrateurService,
    private formBuilder: FormBuilder,
    private _dialogRef: MatDialogRef<AjoutadminComponent>,
    private snack:MatSnackBar,
    @Inject(MAT_DIALOG_DATA) private data: any) {
    {
      this.type = data.type

      if (this.type) {
        this.id = data.id
        console.log(this.id);
      }
    }
  }
  profileForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    login: ['', Validators.required],
    password: ['', Validators.required],
   
  });
  mess(): any {
    let errors = {
      firstNameError: "",
      lastNameError: "",
      email:"",
      emailError:"",
      loginError:"",
      passwordError:""
   
    }
    if (this.profileForm.controls.firstName.errors?.['required']) {
      errors.firstNameError = "Veuillez compléter ce champ";
    }

    if (this.profileForm.controls.lastName.errors?.['required']) {
      errors.lastNameError = "Veuillez compléter ce champ";
    }
    if(this.profileForm.controls.email.errors?.['required']){
      errors.emailError = "Veuillez compléter ce champ";

    }

   
    if (this.profileForm.controls.login.errors?.['required']) {
      errors.loginError ="Veuillez compléter ce champ";
    }
    if (this.profileForm.controls.password.errors?.['required']) {
      errors.passwordError ="Veuillez compléter ce champ";
    }
    if (this.profileForm.controls.password.errors?.['required']) {
      errors.passwordError ="Veuillez compléter ce champ";
    }
 
    return errors
  }

  saveForm() {
    console.log('Form Data is ', this.profileForm.value);
  }

  ngOnInit(): void {
    if (this.type) {
      this.adminservice.consulterAdmin(this.id).subscribe(data => {
        this.newAdminstrateur = data;
        console.log(this.newAdminstrateur);
      })
    }


  }
  ajouterAdmin() {

    this.profileForm.controls.firstName.setValue(this.newAdminstrateur.firstName!)
    this.profileForm.controls.lastName.setValue(this.newAdminstrateur.lastName!)
    this.profileForm.controls.email.setValue(this.newAdminstrateur.email!)
    this.profileForm.controls.login.setValue(this.newAdminstrateur.login!)
    this.profileForm.controls.password.setValue(this.newAdminstrateur.password!)




    if (!this.type ) {
      console.log(this.profileForm.controls.firstName.invalid)
      if(!this.profileForm.controls.firstName.invalid && !this.profileForm.controls.lastName.invalid && !this.profileForm.controls.login.invalid 
        && !this.profileForm.controls.password.invalid  ){
        this.adminservice.ajouterAdminstrateur(this.newAdminstrateur).subscribe(ad => this.handelsucess(ad));
           

      
   

    }}else{
      this.adminservice.updateAdmin(this.newAdminstrateur).subscribe(data =>{console.log(data)});
      this._dialogRef.close(true);
    }
     

  }




  handelsucess(data:any){
  
    if(data){
     
    this._dialogRef.close();
    this.snack.open('Adminstrateur ajouté avec succès', '', {
      duration: 4000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: ['success']
    });
 
    
   
   }
}

}

