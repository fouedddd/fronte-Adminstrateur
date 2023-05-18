import { HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ClientService } from '../services/client.service';
import { count } from 'rxjs';
import { Client } from '../model/client.model';
import { AdminstrateurService } from '../services/adminstrateur.service';
import { Adminstrateur } from '../model/adminstrateur.model';
import { Dab } from '../model/dab.model';
import { DabService } from '../services/dab.service';
import { Message } from '../model/message.model';
import { MessageService } from '../services/message.service';
import { IpserviceService } from '../services/ipservice.service';
import { Chart, ChartConfiguration, ChartOptions } from 'chart.js';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  @ViewChild('histogramCanvas', { static: false })
  histogramCanvas!: ElementRef;
  [x: string]: any;
  client!: Client[];
  admin!: Adminstrateur[];
  dab!: Dab[];
  visits: any = [];

  message!: Message[];
  clientCount: number = 0;
  adminCount: number = 0;
  dabCount: number = 0;
  messageCount: number = 0;
  visitsCount:number=0;
  constructor(private clientservice: ClientService, private adminservice: AdminstrateurService
    , private dabservice: DabService, private messageservice: MessageService, private ipService: IpserviceService) {


  }
  ngOnInit(): void {
    //affiche nombre client
    this.clientservice.getClientCount().subscribe(count => {
      this.client = count
      this.client.forEach((element) => { this.clientCount = this.clientCount + 1 })
    });
    //affiche nombre admin
    this.adminservice.getadminCount().subscribe(count => {
      this.admin = count
      this.admin.forEach((element) => { this.adminCount = this.adminCount + 1 })
    });
    //affiche nombre Dab
    this.dabservice.getDABCount().subscribe(count => {
      this.dab = count
      this.dab.forEach((element) => { this.dabCount = this.dabCount + 1 })
    });
    //affiche nombre message
    this.messageservice.getmessageCount().subscribe(count => {
      this.message = count
      this.message.forEach((element) => { this.messageCount = this.messageCount + 1 })
    });
 

    const today = new Date().toISOString().slice(0, 10);

    this.ipService.getIp().subscribe((data: any) => {
      const ip = data.ip;
      const visits = JSON.parse(localStorage.getItem('visits') || '{}');

      if (!visits[ip]) {
        visits[ip] = {};
      }

      if (!visits[ip][today]) {
        visits[ip][today] = 0;
      }

      visits[ip][today]++;

      localStorage.setItem('visits', JSON.stringify(visits));

      this.visits = Object.keys(visits).map((ip) => {
        return {
          date: today,
          count: Object.values(visits[ip]).reduce((a: any, b: any) => a + b),
        };
      });
      this.visitsCount = Object.keys(this.visits).length
     
    });
      



  }
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'lundi',
      'mardi',
      'mercredi',
      'jeudi',
      'vendredi',
      'samedi',
      'dimanche'
    ],
    datasets: [
      {
        data: [ 5,12,20,8,15,3 ],
        label: 'Nombre visiteur',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'yellow'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;
    // Doughnut
    public doughnutChartLabels: string[] = [ 'Nombre de Visiteur ', 'nombre adminstrateur' ];
    public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
        { data: [ 100,300 , 600 ], label: 'Series A' },
      
      ];
  
    public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
      responsive: false
    };
}











