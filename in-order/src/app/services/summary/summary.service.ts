import {Injectable} from '@angular/core';
import {SummaryModel} from '../../models/summary.model';
import {GamecontrollerService} from '../game-controller/gamecontroller.service';

interface SuccesByQuest {
  q0: number,
  q1: number,
  q23: number
}

interface SuccesByPrecent {
  p0: number,
  p1: number,
  p23: number
}

@Injectable({
              providedIn: 'root'
              // providers: [GamecontrollerService]
            })

export class SummaryService {


  constructor(private GamecontrollerService: GamecontrollerService) { }

  createSummaryObject(successArr: number[]): SuccesByQuest {
    let mistakesObject: SuccesByQuest = {q0: 0, q1: 0, q23: 0};
    const sumArray = successArr.filter(el => true);
    let numOfquestions = sumArray.length;
    for (let i = 0; i < sumArray.length; i++) {
      if (sumArray[i] === 0) { mistakesObject.q0++; }
      else if (sumArray[i] === 1) { mistakesObject.q1++; }
      else { mistakesObject.q23++; }
    }
    return mistakesObject;
  }

  roundTo100(mObj: SuccesByPrecent): SuccesByPrecent {

    const values = Object.values(mObj);

    const total: number = values.reduce((a, b) => {
      return a + b;
    }, 0);

    if (total === 100 || total > 300) {
      return mObj;
    }
    else {
      const min = Math.min(...values.filter((el) => el > 0));
      for (const k of Object.keys(mObj)) {
        if (mObj[k] === min) {
          mObj[k] = mObj[k] + 1;
          return this.roundTo100(mObj);
        }
      }
    }
  }


  verbalAssesment(result: SuccesByPrecent): string {

    let grade: string;
    if (result.p0 > 75) {
      grade = 'A';
    }
    if (result.p0 <= 75 && result.p0 > 50) {
      grade = 'B';
    }
    if (result.p0 <= 50 && result.p0 > 25) {
      grade = 'C';
    }
    if (result.p0 <= 25) {
      grade = 'D';
    }
    switch (grade) {
      case 'A':
        return 'You did very well!';
        break;
      case 'B':
        return 'You did OK!';
        break;
      case 'C':
        return 'You answered part of the questions correctly.';
        break;
      case 'D':
        return 'You answered only a small part of the questions correctly.';
        break;
      default:
        return 'You did OK!';
        break;


    }

  }

  getSummary(): SummaryModel {
    const pre = (part: number, base: number): number => Math.floor(part / base * 100);
    const success = this.GamecontrollerService.getCurrentSuccess();


    const numOfQ: number = success.filter(el => true).length;
    const succByQ: SuccesByQuest = this.createSummaryObject(success);
    const succesbyPrecentage: SuccesByPrecent = {
      p0: pre(succByQ.q0, numOfQ),
      p1: pre(succByQ.q1, numOfQ),
      p23: pre(succByQ.q23, numOfQ),
    };
    const precentRoundTo100: SuccesByPrecent = this.roundTo100(succesbyPrecentage);
    const assesment = this.verbalAssesment(precentRoundTo100);
    let textArray: string[] = ['You\'ve finished the game!', assesment,
                               'You can practice this game again by pressing "Replay".'];

    return {...precentRoundTo100, ...succByQ, text: textArray};
  }
}
