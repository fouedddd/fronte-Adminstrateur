import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Adminstrateur } from '../model/adminstrateur.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AdminstrateurService {

  getAdminURL: string = 'http://localhost:8080/GetAlladmin ';
  ajoutAdminURL: string = 'http://localhost:8080/addAdmin';
  suppAdminURL: string = 'http://localhost:8080/DeleteAdmin';
  modifadminURl: string = 'http://localhost:8080/updateAdmin';
  getoneadmin:string='http://localhost:8080/Getadmin';
  adminstrateurs!: Adminstrateur[];

  constructor(private http: HttpClient) {


  }
  //methode afficher tous l'adminstrateur 
  listeAdminstrateur(): Observable<Adminstrateur[]> {
    return this.http.get<Adminstrateur[]>(this.getAdminURL);

  }
  //methode ajouter adminstrateur
  ajouterAdminstrateur(adm: Adminstrateur): Observable<Adminstrateur> {
    return this.http.post<Adminstrateur>(this.ajoutAdminURL, adm, httpOptions);
  }
  //methode supprimer un adminstrateur
  supprimerAdmin(id: any): any {
    const url = `${this.suppAdminURL}/${id}`;
    return this.http.delete(url);


  }
  consulterAdmin(id: number): Observable<Adminstrateur> {
    const url = `${this.getoneadmin}/${id}`;
    return this.http.get<Adminstrateur>(url);
  }

  updateAdmin( a: Adminstrateur): Observable<any> {
  console.log(a);
    return this.http.put<Adminstrateur>(`${this.modifadminURl}/${a.idadmin}`, a, httpOptions);

  }
  //afficher les nombre des adminstrateurs
  getadminCount(): Observable<Adminstrateur[]> {
    return this.http.get<Adminstrateur[]>(`${this.getAdminURL}`);
   
      };


}
