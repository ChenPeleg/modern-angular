import {Injectable} from '@angular/core';
import {Asteroid} from '../../models/asteroid.model';
import {AsteroidPosition} from '../../models/asteroidPosition.model';

interface Asteroids extends Array<Asteroid> {}

@Injectable({
              providedIn: 'root'
            })

export class ReorderPositionsService {
  positions: Array<AsteroidPosition>;
  asteroids: Asteroids;

  constructor() { }

  reorderPositions(unordered: Array<AsteroidPosition>): Array<AsteroidPosition> {
    const wasReorderCompletely = (arr1: Array<AsteroidPosition>,
                                  arr2: Array<AsteroidPosition>): boolean => {
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i].x === arr2[i].x && arr1[i].y === arr2[i].y) {
          return false;
        }
        return true;
      }
    };
    const newAnswersObject: Array<AsteroidPosition> = [...unordered];
    newAnswersObject.sort(() => Math.random() - 0.5);

    return wasReorderCompletely(newAnswersObject, unordered)
      ? newAnswersObject
      : this.reorderPositions(unordered);
  }

}
