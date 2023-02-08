import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  fileName: string = '';

  onUpload(event: any): void {
    this.fileName = event.target.files[0].name;
  }
}
