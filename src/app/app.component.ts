import { Component, OnInit } from '@angular/core';
import { RdStationService } from './modules/services/rd-station.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  constructor(private readonly rdStationService: RdStationService) { }

  ngOnInit() {
    this.rdStationService.getDeals().subscribe((deals) => {
      console.log(deals);
    });
  }
}
