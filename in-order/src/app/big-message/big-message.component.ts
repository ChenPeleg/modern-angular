import {Component, Input, OnInit} from '@angular/core';

@Component({
             selector: 'app-big-message',
             templateUrl: './big-message.component.html',
             styleUrls: ['./big-message.component.scss']
           })
export class BigMessageComponent implements OnInit {
  @Input() messageText: string;
  fadeOut: boolean;

  constructor() { this.fadeOut = false; }

  ngOnInit(): void {
    setTimeout(() => { this.fadeOut = true; }, 2000);
  }

}
