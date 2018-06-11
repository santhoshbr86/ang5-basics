import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

  transform(items: string[], args?: any): any {
    return items.sort(function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });
  }

}
