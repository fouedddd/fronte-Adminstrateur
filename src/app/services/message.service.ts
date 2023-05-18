import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Message } from '../model/message.model';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  getmessageURL: string ="http://localhost:8080/GetAllmessage";
  deleteMessURL:string="http://localhost:8080/DeleteMessage";
  messages: Message[] =[];

  constructor(private http: HttpClient) { }


  //methode retourne les nombre de tous les message
getmessageCount(): Observable<Message[]> {
  return this.http.get<Message[]>(`${this.getmessageURL}`);
 
    }
           //methode afficher tous les messages
  listeMessage(): Observable<Message[]> {
    return this.http.get<Message[]>(this.getmessageURL);

  }

    //methode supprimer message
    supprimerMessage(id: any): any {
      const url = `${this.deleteMessURL}/${id}`;
      return this.http.delete(url, httpOptions);
  
  
    }
}
