import { Component, OnInit } from '@angular/core';
import {SharedService} from '../services/shared.service';
import {SharedValue} from '../shared';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.scss']
})
export class Parent1Component implements OnInit {
  SharedValueList: SharedValue[] | undefined;


  constructor(public SharedService: SharedService) { }

  getValues() {
  this.SharedValueList = this.SharedService.getValues();
  }
  ngOnInit(): void {
  }

}
