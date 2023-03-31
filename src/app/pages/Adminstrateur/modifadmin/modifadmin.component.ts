import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Adminstrateur } from 'src/app/model/adminstrateur.model';
import { AdminstrateurService } from 'src/app/services/adminstrateur.service';

@Component({
  selector: 'app-modifadmin',
  templateUrl: './modifadmin.component.html',
  styleUrls: ['./modifadmin.component.css']
})
export class ModifadminComponent {

  currentAdmin=new Adminstrateur();
  constructor( private activateRoute:ActivatedRoute,
               private adminservice: AdminstrateurService,
               private router :Router){

  }
  ngOnInit():void{
    this.adminservice.consulterAdmin(this.activateRoute.snapshot.params['id']).subscribe(adm =>{this.currentAdmin=adm;});
  }
  
  updateAdminstrateur(){
    this.adminservice.updateAdmin(this.currentAdmin).subscribe(adm=>{
      this.router.navigate(['listAdmin']);
    })
  
  }

}
