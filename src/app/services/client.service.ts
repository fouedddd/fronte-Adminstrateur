import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../model/client.model';
import { Observable, count } from 'rxjs';





const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  getClientURL: string ="http://localhost:8080/GetAllclient";
  ajoutClientURL:string="http://localhost:8080/addClient";
  supprimerClientURL:string="http://localhost:8080/DeleteClient"
  modifClientURL:string="http://localhost:8080/updateClient"
  getclienturl:string="http://localhost:8080/Getclient"

  constructor(private http: HttpClient) { }


  ajouterClient(cl: Client): Observable<Client> {
    return this.http.post<Client>(this.ajoutClientURL, cl, httpOptions);
  }

  getClientCount(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.getClientURL}`);
   
      };


       //methode afficher tous les client 
  listeClient(): Observable<Client[]> {
    return this.http.get<Client[]>(this.getClientURL);

  }
   //methode supprimer un client
   supprimerClient(id: any): any {
    const url = `${this.supprimerClientURL}/${id}`;
    return this.http.delete(url, httpOptions);


  }
  updateClient( c: Client): Observable<any> {
    console.log(c);
      return this.http.put<Client>(`${this.modifClientURL}/${c.idClient}`, c, httpOptions);
  
    }

    consulterclient(id: number): Observable<Client> {
      const url = `${this.getclienturl}/${id}`;
      return this.http.get<Client>(url);
    }
  }



