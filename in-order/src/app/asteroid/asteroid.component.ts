import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Asteroid} from '../models/asteroid.model';


@Component({
             selector: 'app-asteroid',
             templateUrl: './asteroid.component.html',
             styleUrls: ['./asteroid.component.scss']
           })
export class AsteroidComponent implements OnInit {
  @Output() clickAstro = new EventEmitter<{ index: number }>();
  @Output() hoverAstro = new EventEmitter<{ isOn: boolean }>();

  @Input() astData: Asteroid;
  astSrc: Array<string>;
  imageSrc: string;
  isReversed: boolean;
  isPoped: boolean;
  rotationSpeed: string;
  public readonly showDelay: number = 150;

  constructor() {
    this.astSrc = ['../../assets/images/astro (', '', ').png'];
    this.isPoped = false;
  }

  mouseEnterAsteroid(event: any) {
    if (this.astData.explode) {
      return;
    }
    this.hoverAstro.emit({isOn: true});

  }

  mouseExitAsteroid(event: any) {
    if (this.astData.explode) {
      return;
    }
    this.hoverAstro.emit({isOn: false});
  }

  onClickAsteroid() {
    if (this.astData.explode) {
      return;
    }

    this.clickAstro.emit({index: this.astData.index});
  }

  getLeft() {
    return this.astData.left + '%';
  }

  getBottom() {
    return this.astData.bottom + '%';
  }

  getText() {
    return this.astData.text;
  }

  getImg() {
    const maxNum = 10;
    const num = Math.ceil((Math.random() * maxNum));
    const src = [...this.astSrc];
    src[1] = num.toString();
    return src.join('');
  }

  getRotationspeed() {
    const baseSpeed: number = 20;
    const rand = Math.random() - 0.5;
    return (baseSpeed + rand * baseSpeed) + 's';
  }

  getRotationDir() {
    const rand = Math.random() - 0.5;
    return rand > 0;
  }

  ngOnInit(): void {
    this.imageSrc = this.getImg();
    this.isReversed = this.getRotationDir();
    this.rotationSpeed = this.getRotationspeed();
    setTimeout(() => { this.isPoped = true; }, (this.astData.order * this.showDelay));
  }

}
