import { Component, Input, SimpleChanges } from '@angular/core';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
})
export class StatsComponent {
  @Input() prediction: any;

  chartData: any;

  ngOnInit() {
    this.chartData = this.createChart();
  }

  // Renders right to the canvas element with id='chart'
  createChart() {
    return new Chart('chart',
      {
        type: "doughnut",
        data: {
          labels: ['Dated', 'Modern', 'Very Dated'],
          datasets: [{
            data: [],
            backgroundColor: [
              'rgb(168, 85, 247)',
              'rgb(139, 92, 246)',
              'rgb(217, 70, 239)'
            ]
          }],
        },
        options: {
          plugins: {
            legend: {
              display: false
            }}}
      })
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['prediction'] && this.chartData) {
      this.chartData.data.datasets[0].data = this.prediction.map((result: any) => result.probability)
      this.chartData.update()
    }
  }
}
