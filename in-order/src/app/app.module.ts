import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AsteroidComponent} from './asteroid/asteroid.component';
import {SpaceComponent} from './space/space.component';
import {GameComponent} from './game/game.component';
import {QuestionComponent} from './question/question.component';
import {ExplotionComponent} from './explotion/explotion.component';
import {GamecontrollerService} from './services/game-controller/gamecontroller.service';
import {LaserComponent} from './laser/laser.component';
import {GamebarComponent} from './gamebar/gamebar.component';
import {BigMessageComponent} from './big-message/big-message.component';
import {SummaryComponent} from './summary/summary.component';
import {SpreadPipe} from './summary/spread.pipe';
import {TopBarComponent} from './top-bar/top-bar.component';
import {SoundBtnComponent} from './top-bar/sound-btn/sound-btn.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
            declarations: [
              AppComponent,
              AsteroidComponent,
              SpaceComponent,
              GameComponent,
              QuestionComponent,
              ExplotionComponent,
              LaserComponent,
              GamebarComponent,
              BigMessageComponent,
              SummaryComponent,
              SpreadPipe,
              TopBarComponent,
              SoundBtnComponent
            ],
            imports: [
              HttpClientModule,
              BrowserModule
            ],
            providers: [GamecontrollerService],
            bootstrap: [AppComponent]
          })
export class AppModule {
}
