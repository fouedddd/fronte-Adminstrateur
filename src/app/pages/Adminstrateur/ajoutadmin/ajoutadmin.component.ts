import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Adminstrateur } from 'src/app/model/adminstrateur.model';
import { AdminstrateurService } from 'src/app/services/adminstrateur.service';
@Component({
  selector: 'app-ajoutadmin',
  templateUrl: './ajoutadmin.component.html',
  styleUrls: ['./ajoutadmin.component.css']
})
export class AjoutadminComponent implements OnInit {

  newAdminstrateur = new Adminstrateur();
  message :string | undefined;
  router: Router = new Router;
constructor(private adminservice:AdminstrateurService ){}

  ngOnInit(): void{

  }
  addAdminstrateur(){
this.adminservice.ajouterAdminstrateur(this.newAdminstrateur).subscribe(adm =>{
  console.log(adm);
  this.router.navigate(['/listAdmin']); 
});
  }

}
