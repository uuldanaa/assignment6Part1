import { Component } from '@angular/core';
import {SharedService} from './services/shared.service';
import {SharedValue} from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'assignment6';
  SharedValueList: SharedValue[] | undefined;

  constructor(public SharedService: SharedService) {
    // this.SharedService = new SharedService();
  }

  getValues() {
    this.SharedValueList = this.SharedService.getValues();
  }
}
