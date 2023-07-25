import {Component, ElementRef} from '@angular/core';
import {EChartsOption} from "echarts";
import { multi } from "../../data";

@Component({
  selector: 'app-multi-level-xaxis-stacked-bar-chart',
  templateUrl: './multi-level-xaxis-stacked-bar-chart.component.html',
  styleUrls: ['./multi-level-xaxis-stacked-bar-chart.component.css']
})
export class MultiLevelXAxisStackedBarChartComponent {
  multi: any[] = [];
  xAxisData: string[] = [];
  seriesObject: {[key: string]: any} = {};
  seriesList: any[] = [];

  constructor() {
    Object.assign(this, { multi });
    console.log(multi);
    for (const x of multi){
      for (const y of x["data"]){
        this.xAxisData.push(`${x["name"]}-${y["name"]}`);
        for (const z of y["data"]){
          if(this.seriesObject[z['name']] === null || this.seriesObject[z['name']] === undefined){
            this.seriesObject[z["name"]] = [];
          }
          this.seriesObject[z["name"]].push(z["data"]);
        }
      }
    }
    console.log(this.xAxisData);
    console.log(this.seriesObject);

    Object.keys(this.seriesObject).forEach(key => {
      console.log(key, this.seriesObject[key]);
      this.seriesList.push({
        name: key,
        type: 'bar',
        stack: 'MultiLevelXAxis',
        emphasis: {
          focus: 'series'
        },
        barWidth: 100,
        data: this.seriesObject[key]
      })
    });
  }


  chartOption: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {},
    grid: {
      left: '0%',
      width: '100%',
      right: '0%',
      bottom: '0%'
    },
    xAxis: [
      {
        type: 'category',
        data: this.xAxisData,
      }
    ],
    yAxis: [
      {
        type: 'value',
      }
    ],
    series: this.seriesList
  };
}
