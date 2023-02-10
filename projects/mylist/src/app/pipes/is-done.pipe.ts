import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isDone',
})
export class IsDonePipe implements PipeTransform {
  transform(value: boolean): string {
    return true === value ? 'Completato' : 'Da fare';
  }
}
