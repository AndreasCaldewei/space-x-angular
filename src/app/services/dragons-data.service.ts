import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Dragon} from '../models/dragon';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DragonsDataService {

  url = 'https://api.spacexdata.com/v3/dragons';

  constructor(
    private httpClient: HttpClient
  ) { }

  all(): Observable<Dragon[]> {
    return this.httpClient.get<Dragon[]>(this.url);
  }

  one(id: string): Observable<Dragon> {
    return this.httpClient.get<Dragon>(this.url + '/' + id);
  }

}
