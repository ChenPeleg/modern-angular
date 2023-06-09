import {Injectable} from '@angular/core';
import {LaserPosition} from '../../models/laserPosition.model';

@Injectable({
              providedIn: 'root'
            })
export class LaserPositionService {
  constructor() { }

  setLaserPosition(clientX: number, clientY: number, innerWidth: number,
                   innerHeight: number): LaserPosition {
    const laserX = clientX + 10;
    const laserY = clientY + 14;
    const laserAngle = ((clientX - innerWidth / 2) / 10) - ((clientX - innerWidth / 2) / 5) *
      ((innerHeight - clientY) / (innerHeight / 2));
    /* this comples equation's goal is to minimize the length of the laser beam on the screen, for instance when aiming at an asteroid that is coloser to the left side, the laser should come from the left dorection ect.*/
    let laserPos: LaserPosition = {laserX, laserY, laserAngle};
    return laserPos;
  }

}
