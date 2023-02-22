import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cp-print-information',
  standalone: true,
  imports: [CommonModule],
  template: `<p>
    <b>{{ title }}</b
    >:
    <ng-content></ng-content>
  </p>`,
  styles: [],
})
export class PrintInformationComponent {
  @Input() title!: string;
  @Input() value!: string;
}
