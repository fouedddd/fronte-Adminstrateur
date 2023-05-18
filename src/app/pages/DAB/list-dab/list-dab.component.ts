import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DabService } from 'src/app/services/dab.service';
import { AjoutDABComponent } from '../ajout-dab/ajout-dab.component';
import { Dab } from 'src/app/model/dab.model';
import { ConfirmationDialogConfirmationComponent } from '../../confirmation-dialog-confirmation/confirmation-dialog-confirmation.component';

@Component({
  selector: 'app-list-dab',
  templateUrl: './list-dab.component.html',
  styleUrls: ['./list-dab.component.css']
})
export class ListDABComponent implements OnInit {
  dabs: Dab[] = []; //tableau des dabs

  constructor( private dabservice :DabService,
    private _dialog: MatDialog        ){

}


  ngOnInit(): void {
    this.listeDAB();
   
  }
  ouvrirAjouterClient(){
    const dialogRef = this._dialog.open(AjoutDABComponent);
   dialogRef.afterClosed().subscribe({
    next:(val)=>{
      if(val){
       // this.chargerclient();
      }
    }
   })
  }
  listeDAB(){
    this.dabservice.getDABCount().subscribe(db =>{
      console.log(db);
      this.dabs=db;
    });
  }
  supprimerDAB(d:Dab) {
    const dialogRef = this._dialog.open(ConfirmationDialogConfirmationComponent, {
      width: '250px'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dabservice.supprimerDAB(d.iddab).subscribe(() => {
          console.log("administrateur supprimé");
          this.ngOnInit()
        });
     console.log("hhhh")
      }
    });
  
  }

}
