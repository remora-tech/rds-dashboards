import { Component, OnInit } from '@angular/core';
import { RdStationService } from './modules/services/rd-station.service';
import { Stage } from './interfaces/stage.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  stages: Stage[] = [
    { name: 'Lead Marketing', value: 100 },
    { name: 'Conectado', value: 60 },
    { name: 'Pagamento', value: 40 },
    { name: 'Venda Realizada', value: 20 },
  ];

  constructor(private readonly rdStationService: RdStationService) { }

  ngOnInit() {
    this.rdStationService.getDeals().subscribe((deals) => {
      console.log(deals);
    });
  }
}
