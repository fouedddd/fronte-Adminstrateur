import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dab } from '../model/dab.model';
import { Observable } from 'rxjs';






const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class DabService {
  getDabtURL: string ="http://localhost:8080/GetAllDAB";
  AjoutDABURL:string="http://localhost:8080/addDAB";
  constructor(private http: HttpClient) { }

//methode retourne les nombre de tous les DAB
getDABCount(): Observable<Dab[]> {
  return this.http.get<Dab[]>(`${this.getDabtURL}`);
 
    };


ajouterDAB(db: Dab): Observable<Dab> {
  return this.http.post<Dab>(this.AjoutDABURL,db,httpOptions);

}


}

