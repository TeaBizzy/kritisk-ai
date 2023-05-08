import { Component } from '@angular/core';
import { developers } from 'src/data/developers';

@Component({
  selector: 'app-dev-list',
  templateUrl: './dev-list.component.html',
})

export class DevListComponent {
  developers = developers;
}
