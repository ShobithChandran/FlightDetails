import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngonchange-exp-flight-search',
  templateUrl: './ngonchange-exp-flight-search.component.html',
  styleUrls: ['./ngonchange-exp-flight-search.component.css']
})
export class NgonchangeExpFlightSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  flightTimingsMap = new Map<string, string>([
    ["f1", "9pm"],
    ["f2", "10pm"]
  ]);

  flightTimings: any = "..";

  changeFlightName(flightName: any) {
    console.log("changed.." + flightName);
    this.flightTimings = this.flightTimingsMap.get(flightName);
  }

}
