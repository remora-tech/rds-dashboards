import { Component, OnInit } from '@angular/core';
import { RdStationService } from './modules/services/rd-station.service';
import { Stage } from './interfaces/stage.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  stages: Stage[] = [];

  constructor(private readonly rdStationService: RdStationService) { }

  ngOnInit() {
    setTimeout(() => {
      this.getStages();
    }, 3000);
  }

  getStages() {
    this.rdStationService.getStages().subscribe((stages) => this.stages = stages);
  }
}
