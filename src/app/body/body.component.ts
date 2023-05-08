import { Component } from '@angular/core';
import { predict } from 'src/utils/img-classifier';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
})


export class BodyComponent {
  fileName: string = '';
  prediction: any[] = [];
  loading: boolean = false;
  btnText: string = 'Start!'

  onSubmit(event: any): void {
    event.preventDefault();
  }

  onUpload(event: any): void {
    this.fileName = event.target.files[0].name
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      let img = new Image();
      img.src = typeof(reader.result) === 'string' ? reader.result : '';

      this.loading = true;
      this.btnText = 'Loading...'
      predict(img)
        .then((prediction: any) => {
          this.prediction = prediction;
          this.loading = false;
          this.btnText = 'Try Again'
        })
        .catch((err: any) => {console.log(err);
        })
    })

    reader.readAsDataURL(event.target.files[0])
  }
}
