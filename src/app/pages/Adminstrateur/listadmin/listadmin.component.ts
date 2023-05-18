import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Adminstrateur } from 'src/app/model/adminstrateur.model';
import { AdminstrateurService } from 'src/app/services/adminstrateur.service';
import { AjoutadminComponent } from '../ajoutadmin/ajoutadmin.component';
import { ConfirmationDialogConfirmationComponent } from '../../confirmation-dialog-confirmation/confirmation-dialog-confirmation.component';




@Component({
  selector: 'app-listadmin',
  templateUrl: './listadmin.component.html',
  styleUrls: ['./listadmin.component.css']
})
export class ListadminComponent implements OnInit {
  adminstrateurs: Adminstrateur[] = []; //tableau d'adminstrateur

  constructor(  private adminservice: AdminstrateurService,
    private _dialog: MatDialog ){
  
  }
  ouvrirAjouterAdmin(){
    const dialogRef = this._dialog.open(AjoutadminComponent,{
      data:{type:false}
    });
   dialogRef.afterClosed().subscribe({
    next:(val)=>{
      if(val){
        this.chargeradmin();
      }
    }
   })
  }
 


  ngOnInit(): void {
 this.chargeradmin();


   
  }
  chargeradmin(){
    this.adminservice.listeAdminstrateur().subscribe(adm =>{
      console.log(adm);
      this.adminstrateurs=adm;
    });
  }
  supprimerAdmin(a: any) {
    const dialogRef = this._dialog.open(ConfirmationDialogConfirmationComponent, {
      width: '250px'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.adminservice.supprimerAdmin(a).subscribe(() => {
          console.log("administrateur supprimé");
          
        });
      }
    });
  
  }
  ouvrirModifierAdmin(data:any){
    this._dialog.open(AjoutadminComponent,{
     data:{
       id:data,
       type:true
     }
     
    }
    ).afterClosed().subscribe(data =>this.ngOnInit())
    
   }

 
  

}
