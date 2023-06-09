import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
        name: 'spread'
      })
export class SpreadPipe implements PipeTransform {

  transform(value: string[], ...args: unknown[]): string {
    const lineBreak = `
`;

    return value.join(lineBreak);
  }

}
