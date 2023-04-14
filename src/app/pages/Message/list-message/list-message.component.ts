import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/model/message.model';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-list-message',
  templateUrl: './list-message.component.html',
  styleUrls: ['./list-message.component.css']
})
export class ListMessageComponent implements OnInit{
  messages:Message[]=[];

  constructor(private servicemessage:MessageService){

  }
  ngOnInit(): void {
  
  }





  chargermessages(){
    this.servicemessage.listeMessage().subscribe(m =>{
      console.log(m);
      this.messages=m;
    });
  }

}
