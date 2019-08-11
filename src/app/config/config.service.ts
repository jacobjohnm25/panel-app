import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Config {
  tabs: string;
}

@Injectable()
export class ConfigService {
  configUrl = 'assets/tabNames.json';

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get(this.configUrl);
  }

}
