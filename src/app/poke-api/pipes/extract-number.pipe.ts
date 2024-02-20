import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extractNumber'
})
export class ExtractNumberPipe implements PipeTransform {

  transform(url: string): string {
    if (!url) return '';

    const parts = url.split('/');
    const index = parts.findIndex(part => part.includes('pokemon'));

    if (index !== -1) {
      const numberIndex = index + 1;
      return parts[numberIndex];
    } else {
      return '';
    }
  }

}
