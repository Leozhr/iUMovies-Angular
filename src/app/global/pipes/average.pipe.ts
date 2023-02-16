import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'average',
})
export class AveragePipe implements PipeTransform {
  transform(value: number) {
    return value?.toFixed(1);
  }
}
