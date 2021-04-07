import { Injectable } from '@angular/core';
import { SharedValue} from '../shared';
import {LoggingService} from './logging.service';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private loggingService: LoggingService) { }

  getValues() {
    let SharedValueList: SharedValue[];
    SharedValueList = [
      new SharedValue(1, 'Linda', "Rus", 23),
      new SharedValue(2, 'John', "Kaz", 45),
      new SharedValue(3, "Amanda", "Eng", 13),
      new SharedValue(4, "Nick", "Fr", 19)
    ];

    this.loggingService.log('List of values: ' + SharedValueList);
    return SharedValueList;
  }
}
