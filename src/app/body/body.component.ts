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
  prediction: any[] = [];
  chartData: any;
  loading: boolean = false;
  btnText: string = 'Start!'

  ngOnInit() {
    this.createChart()
    console.log(this.prediction);

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

  onSubmit(event: any): void {
    event.preventDefault();
  }

  onClick(event:any): void {
    this.prediction = [];
    console.log('update', this.prediction.length)
  }

  onUpload(event: any): void {
    this.fileName = event.target.files[0].name
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      this.imgSrc = reader.result;

      let img = new Image();
      img.src = typeof(reader.result) === 'string' ? reader.result : '';

      this.loading = true;
      this.btnText = 'Loading...'
      predict(img)
        .then((prediction: any) => {
          this.prediction = prediction;
          this.chartData.data.datasets[0].data = this.prediction.map((result: any) => result.probability)
          this.chartData.update()
          this.loading = false;
          this.btnText = 'Try Again'
        })
        .catch((err: any) => {})
    })

    reader.readAsDataURL(event.target.files[0])
  }
}
