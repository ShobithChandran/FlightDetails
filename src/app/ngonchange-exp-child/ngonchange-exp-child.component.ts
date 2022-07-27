import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ngonchange-exp-child',
  templateUrl: './ngonchange-exp-child.component.html',
  styleUrls: ['./ngonchange-exp-child.component.css']
})
export class NgonchangeExpChildComponent implements OnInit {

  @Input() parentData: any;
  constructor() {
  }

  ngOnInit() {
  }

  changeFromChild(){
    this.parentData -= 1;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ng on changes is called" + changes)
  }

}
