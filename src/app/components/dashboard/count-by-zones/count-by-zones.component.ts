import { Component, OnInit } from '@angular/core';
import { FiledataService } from '../../../filedata.service';

@Component({
  selector: 'app-count-by-zones',
  templateUrl: './count-by-zones.component.html',
  styleUrls: ['./count-by-zones.component.scss']
})
export class CountByZonesComponent implements OnInit {
  public barChartData: Array<any> = [
    { data: [], label: "Calle 85" },
    { data: [], label: "Salitre Plaza" },
    { data: [], label: "Parque 93" },
    { data: [], label: "Calle 80" },
    { data: [], label: "Centro" }
  ];
  public barChartLabels: Array<any> = [];
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  constructor(private _filedata: FiledataService) { }

  ngOnInit() {
    this.loadData();
  }
  loadData(){
    this._filedata.getZonesData().subscribe(
      (filedata) => {
        this.addData(filedata);
      }
    )
  }
  addData(filedata:any){
    this.barChartData.forEach((element, index) => {
      this.barChartData[index].data = [...this.barChartData[index].data, filedata[index].data.count];
    });
    let time = new Date(filedata[0].data.time);
    this.barChartLabels = [...this.barChartLabels, (time.getHours() + " : " + time.getMinutes())];
  }

}
