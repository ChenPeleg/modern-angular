import {Injectable} from '@angular/core';

@Injectable({
              providedIn: 'root'
            })
export class SoundEffectService {
  soundOn: boolean;

  constructor() {
    this.soundOn = true;
    console.log('construct');
  }

  toggleSound(): boolean {
    this.soundOn = !this.soundOn;
    console.log('toggle', this.soundOn);
    return this.soundOn;
  }

  getIsSoundOn(): boolean {
    console.log('getis', this.soundOn);
    return this.soundOn;
  }

  getSound(soundName: string): string {
    switch (soundName) {
      case 'laser':
        return 'laser1';
      case 'boom':
        return 'laser1';
      case 'fail':
        return 'laserfail';
      case 'win':
        return 'good';
      default:
        return soundName;
    }
  }

  playAudio(snd: string = 'laser') {
    console.log('play sound', this.soundOn);
    if (this.soundOn === false) { return; }
    ;
    const file = this.getSound(snd);
    let audio = new Audio();
    audio.src = `../../../assets/audio/${file}.mp3`;
    audio.load();
    audio.play();
  }

}
