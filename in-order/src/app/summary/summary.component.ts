import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SummaryModel} from '../models/summary.model';
import {SummaryService} from '../services/summary/summary.service';

@Component({
             selector: 'app-summary',
             templateUrl: './summary.component.html',
             styleUrls: ['./summary.component.scss'],
             providers: [SummaryService]
           })
export class SummaryComponent implements OnInit {
  @Output() clickReplay = new EventEmitter<boolean>();
  summup: SummaryModel = {q0: 0, q1: 1, q23: 0, p0: 0, p1: 1, p23: 0};
  num: number;
  pre: number;
  pre1: number;

  constructor(private SummaryService: SummaryService) {
    this.summup = this.SummaryService.getSummary();
  }

  onClickReplay() {

    this.clickReplay.emit(true);
  }

  ngOnInit(): void {

  }

}
