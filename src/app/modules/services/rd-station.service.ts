import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Deal } from '../../interfaces/deal.interface';
import { Stage } from '../../interfaces/stage.interface';

@Injectable({
  providedIn: 'root'
})
export class RdStationService {
  private readonly rdStationToken: string = '63e633895d4fce002cd891fc';

  constructor(private readonly httpClient: HttpClient) { }

  getDeals(): Observable<Deal[]> {
    return this.httpClient.get<Deal[]>(`/api/v1/deals?token=${this.rdStationToken}`);
  }

  getStages(): Observable<any> {
    return this.httpClient.get<Stage[]>(`/api/v1/deal_stages?token=${this.rdStationToken}`).pipe(
      map((stages: any) => this.convertStages(stages.deal_stages))
    );
  }

  convertStages(stages: any[]) {
    return stages.map((stage: any) => {
      return {
        id: stage.id,
        name: stage.name,
        description: stage.description,
        value: 20
      }
    })
  }
}
