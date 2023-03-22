import { Component } from '@angular/core';
import { predict } from 'src/utils/img-classifier';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})


export class BodyComponent {
  fileName: string = '';
  imgSrc: any = '';
  prediction: any;
  chartData: any;

  ngOnInit() {
    this.createChart()
  }

  createChart() {
    // Renders right to the canvas element with id='chart'
    this.chartData = new Chart('chart',
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

  onUpload(event: any): void {
    this.fileName = event.target.files[0].name
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      this.imgSrc = reader.result;

      let img = new Image();
      img.src = typeof(reader.result) === 'string' ? reader.result : '';

      predict(img)
        .then((prediction: any) => {
          this.prediction = prediction;
          this.chartData.data.datasets[0].data = this.prediction.map((result: any) => result.probability)
          this.chartData.update()
        })
        .catch((err: any) => {})
    })

    reader.readAsDataURL(event.target.files[0])
  }
}
