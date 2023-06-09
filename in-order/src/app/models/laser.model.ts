export class Laser {
  public showLaser: boolean;
  public laserX: number;
  public laserY: number;
  public laserAngle?: number;
  public laserFiring?: boolean;

  constructor(laserX: number, laserY: number, showLaser: boolean, laserAngle?: number,
              laserFiring?: boolean) {
    this.laserX = laserX;
    this.laserY = laserY;
    this.showLaser = showLaser;
    this.laserAngle = laserAngle;
    this.laserFiring = false;

  }
}
