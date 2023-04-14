import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Adminstrateur } from 'src/app/model/adminstrateur.model';
import { AdminstrateurService } from 'src/app/services/adminstrateur.service';
@Component({
  selector: 'app-ajoutadmin',
  templateUrl: './ajoutadmin.component.html',
  styleUrls: ['./ajoutadmin.component.css']
})
export class AjoutadminComponent implements OnInit {

  newAdminstrateur = new Adminstrateur();

 
  id!:number;
  type:boolean;
constructor(private adminservice:AdminstrateurService ,
  private _dialogRef:MatDialogRef<AjoutadminComponent>,
  @Inject(MAT_DIALOG_DATA) private data:any){
    {this.type=data.type

      if(this.type)  {this.id=data.id
       console.log(this.id);}
   
   
       
     }
  }

  ngOnInit(): void{
    if(this.type){
      this.adminservice.consulterAdmin(this.id).subscribe(data =>{
        this.newAdminstrateur=data;
        console.log(this.newAdminstrateur);
      })
    }

  }
  ajouterAdmin(){
    if(!this.type){
      this.adminservice.ajouterAdminstrateur(this.newAdminstrateur).subscribe(ad =>{
        console.log(ad);
        alert('Adminstrateur ajouté   avec succes');
        this._dialogRef.close(true);
       
      });
    }else{
      this.adminservice.updateAdmin(this.newAdminstrateur).subscribe(data =>{console.log(data)});
    }
     this._dialogRef.close(true);
  
      }

}
