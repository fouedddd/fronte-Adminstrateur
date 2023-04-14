
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Client } from 'src/app/model/client.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-ajout-client',
  templateUrl: './ajout-client.component.html',
  styleUrls: ['./ajout-client.component.css']
})
export class AjoutClientComponent implements OnInit {
  newClient= new Client;
  id!:number
type:boolean
  constructor(private clientservice:ClientService,
    private _dialogRef:MatDialogRef<AjoutClientComponent>,
    @Inject(MAT_DIALOG_DATA) private data:any
    ){this.type=data.type

   if(this.type)  {this.id=data.id
    console.log(this.id);}


    
  }
  ngOnInit(): void {
    if(this.type){
      this.clientservice.consulterclient(this.id).subscribe(data =>{
        this.newClient=data;
        console.log(this.newClient);
      })
    }
    
  }
    





  ajouterClient(){
    if(!this.type){
      this.clientservice.ajouterClient(this.newClient).subscribe(cl =>{
        console.log(cl);
        alert('client ajouté avec succes');
        this._dialogRef.close(true);
       
      });
    }else{
      this.clientservice.updateClient(this.newClient).subscribe(data =>{console.log(data)});
    } this._dialogRef.close(true);
  
      }

}
