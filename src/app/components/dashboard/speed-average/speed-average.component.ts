import { Component, OnInit } from '@angular/core';
import { FiledataService } from '../../../filedata.service'

@Component({
  selector: 'app-speed-average',
  templateUrl: './speed-average.component.html',
  styleUrls: ['./speed-average.component.scss']
})
export class SpeedAverageComponent implements OnInit {
  public doughnutChartLabels:string[] = ['calle85', 'Salitre Plaza', 'Parque 93', 'Calle 80', 'Centro'];
  public doughnutChartData:number[] = [0, 0, 0, 0, 0];
  public doughnutChartType:string = 'doughnut';
  public speedData = [];
  public speedDataAddition = [0,0,0,0,0];
  public averageLength:number = 0;

  constructor(private _filedata: FiledataService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this._filedata.getZonesData().subscribe(
      (filedata)=>{
        this.addData(filedata);
      }
    );
  }

  addData(filedata:any){
    this.averageLength++;
    this.doughnutChartData.forEach((element, index)=>{
      this.speedDataAddition[index] +=  parseInt(filedata[index].data.speed);
      this.doughnutChartData[index] = this.speedDataAddition[index]/this.averageLength;
    });    
    /* this.doughnutChartData=this.speedData; */
    this.doughnutChartLabels = ['calle85', 'Salitre Plaza', 'Parque 93', 'Calle 80', 'Centro'];
  }

}
