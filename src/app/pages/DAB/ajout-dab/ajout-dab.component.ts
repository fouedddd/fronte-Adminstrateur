import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Dab } from 'src/app/model/dab.model';
import { DabService } from 'src/app/services/dab.service';

@Component({
  selector: 'app-ajout-dab',
  templateUrl: './ajout-dab.component.html',
  styleUrls: ['./ajout-dab.component.css']
})
export class AjoutDABComponent implements OnInit {
newDAB= new Dab;

  constructor(private dabservice:DabService,
    private _dialogRef:MatDialogRef<AjoutDABComponent>){


    
  }
  ngOnInit(): void {
   
  }
  ajouterDAB(){
    this.dabservice.ajouterDAB(this.newDAB).subscribe(db =>{
      console.log(db);
      alert('DAB ajouté avec succes');
      this._dialogRef.close(true);
     
    });
      }

}
