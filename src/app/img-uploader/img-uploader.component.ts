import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-img-uploader',
  templateUrl: './img-uploader.component.html',
})
export class ImgUploaderComponent {
  @Output() onUpload = new EventEmitter();
  @Input() btnText: string = 'Start!';
  @Input() loading: boolean = false;
}
