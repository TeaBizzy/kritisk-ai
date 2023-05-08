import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dev-contact',
  templateUrl: './dev-contact.component.html',
})

export class DevContactComponent {
  @Input() name: string = ''
  @Input() img: string = ''
  @Input() email: string = ''
  @Input() phone: string = ''
}
