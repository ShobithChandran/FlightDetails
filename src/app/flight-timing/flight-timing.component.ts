import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-flight-timing',
  templateUrl: './flight-timing.component.html',
  styleUrls: ['./flight-timing.component.css']
})
export class FlightTimingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() flightName: any;

  flightTimings: any = "..";


  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called................" + this.flightName);

    this.flightTimings = this.flightTimingsMap.get(this.flightName);
    console.log("flight timings ................" + this.flightTimings);

  }

  flightTimingsMap = new Map<string, string>([
    ["indigo", "9pm"],
    ["kingfisher", "10pm"]
  ]);

}
