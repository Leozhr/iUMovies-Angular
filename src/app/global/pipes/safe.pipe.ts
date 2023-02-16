import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'safe',
})
export class SafePipe implements PipeTransform {
  transform(url: string) {
    if (url == null) {
      url = '';
    }

    return url;
  }
}
