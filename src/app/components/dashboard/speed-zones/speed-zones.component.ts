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
  public lineChartColors: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,0)',
      borderColor: '#ff8db2',
      pointBackgroundColor: '#ff8db2',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#ff8db2'
    },
    {
      backgroundColor: 'rgba(255,255,255,0)',
      borderColor: '#87bff4',
      pointBackgroundColor: '#87bff4',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#87bff4'
    },
    {
      backgroundColor: 'rgba(255,255,255,0)',
      borderColor: '#fee796',
      pointBackgroundColor: '#fee796',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#fee796'
    },
    {
      backgroundColor: 'rgba(255,255,255,0)',
      borderColor: '#f0f0f3',
      pointBackgroundColor: '#f0f0f3',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#f0f0f3'
    },
    {
      backgroundColor: 'rgba(255,255,255,0)',
      borderColor: '#74dcda',
      pointBackgroundColor: '#74dcda',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#74dcda'
    }
  ]
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';
  constructor(private _filedata: FiledataService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this._filedata.getZonesData().subscribe(
      (filedata) => {
        this.addPoints(filedata);
      }
    )
  }

  addPoints(filedata: any) {
    this.lineChartData.forEach((element, index) => {
      this.lineChartData[index].data = [...this.lineChartData[index].data, filedata[index].data.speed];
    });
    let time = new Date(filedata[0].data.time);
    this.lineChartLabels = [...this.lineChartLabels, (time.getHours() + " : " + time.getMinutes())];
  }

}
