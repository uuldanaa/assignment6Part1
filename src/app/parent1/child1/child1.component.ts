import { Component, OnInit } from '@angular/core';
import {SharedValue} from '../../shared';
import {SharedService} from '../../services/shared.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {

  SharedValueList: SharedValue[] | undefined;

  constructor(public SharedService: SharedService) {
    // this.SharedService = new SharedService();
  }

  getValues() {
    this.SharedValueList = this.SharedService.getValues();
  }

  ngOnInit(): void {
  }

}
