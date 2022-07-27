import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  flightNameEnteredInput: any;

  constructor() { }

  ngOnInit(): void {
  }

  changeFlightName(flightName: any) {
    console.log("changed.." + flightName);
    this.flightNameEnteredInput = flightName;
  }

}
