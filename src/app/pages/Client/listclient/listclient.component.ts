import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Client } from 'src/app/model/client.model';
import { ClientService } from 'src/app/services/client.service';
import { AjoutClientComponent } from '../ajout-client/ajout-client.component';





@Component({
  selector: 'app-listclient',
  templateUrl: './listclient.component.html',
  styleUrls: ['./listclient.component.css']
})
export class ListclientComponent implements OnInit {

clients:Client[]=[];

constructor( private clientservice :ClientService,
              private _dialog: MatDialog        ){

}
ouvrirAjouterClient(){
  const dialogRef = this._dialog.open(AjoutClientComponent,{
    data:{type:false}
  });
 dialogRef.afterClosed().subscribe({
  next:(val)=>{
    if(val){
      this.chargerclient();
    }
  }
 })
}



  ngOnInit(): void {
    this.chargerclient();
    
  }
  chargerclient(){
    this.clientservice.listeClient().subscribe(cl =>{
      console.log(cl);
      this.clients=cl;
    });
  }
  supprimerClient(c:Client){
    let conf =confirm("Etes-vous sur ?");
    if(conf)
    this.clientservice.supprimerClient(c.idClient).subscribe(()=>{
      console.log(" supprimé");
      this.chargerclient();
    }
    
    );


  }
  ouvrirModifierClient(data:any){
   this._dialog.open(AjoutClientComponent,{
    data:{
      id:data,
      type:true
    }
    
   }
   ).afterClosed().subscribe(data =>this.ngOnInit())
   
  }

}
