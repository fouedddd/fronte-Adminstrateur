import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DabService } from 'src/app/services/dab.service';
import { AjoutDABComponent } from '../ajout-dab/ajout-dab.component';

@Component({
  selector: 'app-list-dab',
  templateUrl: './list-dab.component.html',
  styleUrls: ['./list-dab.component.css']
})
export class ListDABComponent implements OnInit {

  constructor( private dabservice :DabService,
    private _dialog: MatDialog        ){

}


  ngOnInit(): void {
   
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

}
