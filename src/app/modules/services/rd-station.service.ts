import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Deal } from '../../interfaces/deal.interface';

@Injectable({
  providedIn: 'root'
})
export class RdStationService {
  private readonly rdStationToken: string = '';

  constructor(private readonly httpClient: HttpClient) { }

  getDeals(): Observable<Deal[]> {
    return this.httpClient.get<Deal[]>(`/api/v1/deals?token=${this.rdStationToken}`);
  }
}
