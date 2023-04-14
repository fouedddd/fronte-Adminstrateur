import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Adminstrateur } from 'src/app/model/adminstrateur.model';
import { AdminstrateurService } from 'src/app/services/adminstrateur.service';
import { AjoutadminComponent } from '../ajoutadmin/ajoutadmin.component';




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
  supprimerAdmin(a:Adminstrateur){
    let conf =confirm("Etes-vous sur ?");
    if(conf)
    this.adminservice.supprimerAdmin(a.idadmin).subscribe(()=>{
      console.log("adminstrateur supprimé");
      //this.chargeradmin();
    }
    );


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
