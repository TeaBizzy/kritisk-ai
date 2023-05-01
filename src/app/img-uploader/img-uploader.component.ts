import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-img-uploader',
  templateUrl: './img-uploader.component.html',
  styleUrls: ['./img-uploader.component.css']
})
export class ImgUploaderComponent {
  @Output() onUpload = new EventEmitter();
  @Input() btnText: string = 'Start!';
  @Input() loading: boolean = false;
}
