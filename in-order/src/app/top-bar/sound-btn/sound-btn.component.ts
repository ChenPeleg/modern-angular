import {Component, OnInit} from '@angular/core';
import {SoundEffectService} from '../../services/soundEffect/sound-effect.service';

@Component({
             selector: 'app-sound-btn',
             templateUrl: './sound-btn.component.html',
             styleUrls: ['./sound-btn.component.scss'],

           })
export class SoundBtnComponent implements OnInit {

  soundOnImage: string = '../../../assets/images/volumeon.png';
  soundOffImage: string = '../../../assets/images/volumeoff.png';
  soundIsOn: boolean;

  constructor(private SoundEffectService: SoundEffectService) { }

  clickSound() {
    this.soundIsOn = this.SoundEffectService.toggleSound();

  }

  ngOnInit(): void {
    this.soundIsOn = this.SoundEffectService.getIsSoundOn();
  }

}
