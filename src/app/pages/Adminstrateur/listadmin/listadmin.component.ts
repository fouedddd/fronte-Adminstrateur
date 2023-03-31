import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Adminstrateur } from 'src/app/model/adminstrateur.model';
import { AdminstrateurService } from 'src/app/services/adminstrateur.service';

@Component({
  selector: 'app-listadmin',
  templateUrl: './listadmin.component.html',
  styleUrls: ['./listadmin.component.css']
})
export class ListadminComponent implements OnInit {
  adminstrateurs: Adminstrateur[] = []; //tableau d'adminstrateur

  constructor(  private adminservice: AdminstrateurService){
  
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
      this.chargeradmin;
    }
    );


  }

 
  

}
