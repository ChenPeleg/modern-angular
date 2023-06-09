import {Component, OnInit} from '@angular/core';

@Component({
             selector: 'app-explotion',
             templateUrl: './explotion.component.html',
             styleUrls: ['./explotion.component.scss']
           })
export class ExplotionComponent implements OnInit {
  peaces: Array<number>;

  constructor() {
    this.peaces = [];
    this.peaces.length = 200;
  }

  ngOnInit(): void {
  }

}
