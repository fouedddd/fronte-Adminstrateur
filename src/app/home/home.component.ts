import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { count } from 'rxjs';
import { Client } from '../model/client.model';
import { AdminstrateurService } from '../services/adminstrateur.service';
import { Adminstrateur } from '../model/adminstrateur.model';
import { Dab } from '../model/dab.model';
import { DabService } from '../services/dab.service';
import { Message } from '../model/message.model';
import { MessageService } from '../services/message.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit{
  [x: string]: any;
client!:Client[];
admin!:Adminstrateur[];
dab!:Dab[];
message!:Message[];
  clientCount:number=0;
  adminCount:number=0;
  dabCount:number=0;
  messageCount:number=0;
  constructor(private clientservice:ClientService,private adminservice:AdminstrateurService
    ,private dabservice:DabService,private messageservice:MessageService){
    

   
  }
  ngOnInit(): void {
    //affiche nombre client
    this.clientservice.getClientCount().subscribe(count=>{this.client=count
      this.client.forEach((element)=>{this.clientCount=this.clientCount+1})
    });
   //affiche nombre admin
    this.adminservice.getadminCount().subscribe(count=>{this.admin=count
    this.admin.forEach((element)=>{this.adminCount=this.adminCount+1})});
    //affiche nombre Dab
    this.dabservice.getDABCount().subscribe(count=>{this.dab=count
    this.dab.forEach((element)=>{this.dabCount=this.dabCount+1})});
    //affiche nombre message
    this.messageservice.getmessageCount().subscribe(count=>{this.message=count
    this.message.forEach((element)=>{this.messageCount=this.messageCount+1})});

    
  



}


}









