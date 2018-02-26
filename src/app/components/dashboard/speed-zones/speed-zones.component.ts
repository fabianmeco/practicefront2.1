import { Component, OnInit } from '@angular/core';
import { FiledataService } from '../../../filedata.service'

@Component({
  selector: 'app-speed-zones',
  templateUrl: './speed-zones.component.html',
  styleUrls: ['./speed-zones.component.scss']
})
export class SpeedZonesComponent implements OnInit {
  public lineChartData: Array<any> = [
    { data: [], label: "Calle 85" },
    { data: [], label: "Salitre Plaza" },
    { data: [], label: "Parque 93" },
    { data: [], label: "Calle 80" },
    { data: [], label: "Centro" }
  ];
  public lineChartLabels: Array<any> = [];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';
  constructor(private _filedata: FiledataService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this._filedata.getZonesData().subscribe(
      (filedata) => {
        let time = new Date(filedata[0].data.time);
        this.lineChartLabels.push(time.getHours() + " : " + time.getMinutes());
        this.addPoints(filedata);
      }
    )
  }

  addPoints(filedata: any) {
    let index = 0;
    filedata.forEach(element => {
      this.lineChartData[index].data.push(element.data.speed);
      index++;
    });
  }

}
