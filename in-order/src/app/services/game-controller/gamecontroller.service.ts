import {Injectable} from '@angular/core';
import *  as  data from '../../../assets/questions.json';

@Injectable({
              providedIn: 'root'
            })
export class GamecontrollerService {
  soundOn: boolean;
  questionNum: number;
  successArray: number[];
  feedbackHistory: string[];

  constructor() {
    this.questionNum = 1, this.successArray = [], this.feedbackHistory = [];
    this.soundOn = true;
  }

  setNextQuestion(mistakes: number): boolean {
    this.successArray[this.questionNum] = mistakes;
    console.log(this.successArray);
    this.questionNum = this.questionNum + 1;
    if (data.questions[this.questionNum]) {
      return true;
    }
    else {
      // this.questionNum = 1;
      // this.successArray = [];
      // this.feedbackHistory = [];
      return false;
    }
  }

  setNewGame(): void {
    this.questionNum = 1;
    this.successArray = [];
    this.feedbackHistory = [];
  }

  getCurrentQuestion(): any {
    return data.questions[this.questionNum].text;
  }

  getCurrentAnswers(): any {
    return [...data.questions[this.questionNum].answers];
  }

  getCurrentSuccess(): number[] {
    return this.successArray;
  }

  feedBackText(currentMistakes: number): string {
    const randGood = ['Very Good!', 'Great!', 'You\'re a champ!', 'Amazing!', 'Smart!'];
    const randBad = ['Next time...', 'try again...', 'Think again...', 'Not exactly', 'Smart!'];
    const randAvrge = ['Almost..', 'That was close..', 'Most of it was correct...'];
    const randAgain = ['you\'re on a streak!', 'How do you do it?', 'Time after time!',
                       'Born a winner!'];
    let arrayOfFeeds: string[];
    switch (currentMistakes) {
      case 0:
        arrayOfFeeds = randGood;
        if ((this.questionNum > 1) && this.successArray[this.questionNum - 1] ===
          0) { arrayOfFeeds = randAgain; }
        break;
      case 1:
        arrayOfFeeds = randAvrge;
        break;
      default:
        arrayOfFeeds = randBad;
    }
    return this.arrayRandom(arrayOfFeeds);
    return 'Good!';

  }

  private arrayRandom(arr: Array<string>): string {
    const randomElement = (): string => arr[Math.floor(Math.random() * arr.length)];
    let feedBack: string;
    for (let i: number = 0; i < 4; i++) {
      feedBack = randomElement();
      if (feedBack !== this.feedbackHistory[this.questionNum + 1]) { break; }
      ;
    }
    return feedBack;
  }

}
