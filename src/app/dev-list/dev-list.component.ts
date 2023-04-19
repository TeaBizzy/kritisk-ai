import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dev-list',
  templateUrl: './dev-list.component.html',
  styleUrls: ['./dev-list.component.css']
})
export class DevListComponent {
  @Input() foo: any;
}
