import { Component, OnInit, Input } from '@angular/core';
import { MultiDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: [],
})
export class GraficoDonaComponent implements OnInit {
  @Input() dataGraficos: any = {};

  public doughnutChartLabels: Label[];
  public doughnutChartData: MultiDataSet;
  public doughnutChartType: ChartType;
  public leyenda: string;

  constructor() {}

  ngOnInit(): void {
    this.doughnutChartData = this.dataGraficos.data;
    this.doughnutChartLabels = this.dataGraficos.labels;
    this.doughnutChartType = this.dataGraficos.type;
    this.leyenda = this.dataGraficos.leyenda;
  }
}
