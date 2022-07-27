import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngonchange-exp-parent',
  templateUrl: './ngonchange-exp-parent.component.html',
  styleUrls: ['./ngonchange-exp-parent.component.css']
})
export class NgonchangeExpParentComponent implements OnInit {

  data = 0;
  constructor() {
  }

  ngOnInit() {
  }

  changeFromParent(arg: any){
    this.data += 1;
  }
  changeCount: number = 0;


}
