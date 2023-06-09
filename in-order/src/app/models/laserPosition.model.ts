export class LaserPosition {
  public laserX: number;
  public laserY: number;
  public laserAngle: number;

  constructor(laserY: number, laserX: number, laserAngle: number) {
    this.laserY = laserY;
    this.laserX = laserX;
    this.laserAngle = laserAngle;
  }
}
