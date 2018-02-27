import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class FiledataService {
  private zones = [
    { "zoneId": "Calle 85" },
    { "zoneId": "Salitre plaza" },
    { "zoneId": "Parque 93" },
    { "zoneId": "Calle 80" },
    { "zoneId": "Centro" }
  ];
  private activity = [];

  constructor() { }

  getZonesData(): Observable<any[]> {
    return new Observable<any[]>(
      (value) => {
        setInterval(
          () => {
            this.activity = this.zones.map(
              function (zoneActivity) {
                return {
                  zoneId: zoneActivity.zoneId,
                  data: {
                    count: Math.ceil(Math.random() * 10),
                    speed: Math.round(Math.random() * 80),
                    time: Date.now()
                  }
                }
              });
            value.next(this.activity);
          }, 5000);
      }
    )
  }
}
