import {Injectable} from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {observableToPromise} from "../../utils/observableToPromise";
import {allGameData} from "../../data/data";

@Injectable({
  providedIn: 'root'
})
export class GamecontrollerService {
  data:any= {}
  soundOn: boolean;
  questionNum: number;
  successArray: number[];
  feedbackHistory: string[];
  private jsonUrl: string = 'assets/questions.json';

  constructor(private http: HttpClient) {
    this.data = allGameData;
    this.questionNum = 1, this.successArray = [], this.feedbackHistory = [];
    this.soundOn = true;
    // this.initGame().then()
  }

  setNextQuestion(mistakes: number): boolean {
    this.successArray[this.questionNum] = mistakes;
    console.log(this.successArray);
    this.questionNum = this.questionNum + 1;
    if (this.data.questions[this.questionNum]) {
      return true;
    } else {
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
    return this.data.questions[this.questionNum].text;
  }

  getCurrentAnswers(): any {
    return [...this.data.questions[this.questionNum].answers];
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
          0) {
          arrayOfFeeds = randAgain;
        }
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

  private async initGame() {
    const fromJson = ( await observableToPromise( this.getJSON()) ) as Record<
      string,
      string
    >;
     console.log(fromJson)

  }
  private getJSON(): Observable<Record<string, string>> {
    return this.http.get(this.jsonUrl) as Observable<
      Record<string, string>
    >;
  }

  private arrayRandom(arr: Array<string>): string {
    const randomElement = (): string => arr[Math.floor(Math.random() * arr.length)];
    let feedBack: string = '';
    for (let i: number = 0; i < 4; i++) {
      feedBack = randomElement();
      if (feedBack !== this.feedbackHistory[this.questionNum + 1]) {
        break;
      }

    }
    return feedBack;
  }

}
