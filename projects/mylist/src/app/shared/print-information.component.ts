import { Component, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cp-print-information',
  standalone: true,
  imports: [CommonModule],
  preserveWhitespaces: true,
  template: `
    <ng-container
      [ngTemplateOutlet]="!componentTemplate ? defaultView : componentTemplate"
      [ngTemplateOutletContext]="{ $implicit: value, title: title }"
    ></ng-container>

    <ng-template #defaultView>
      <p>
        <b *ngIf="title">{{ title }}:</b>
        {{ value }}
      </p>
    </ng-template>
  `,
  styles: [],
})
export class PrintInformationComponent {
  @Input() title!: string;
  @Input() value!: string;

  @Input()
  componentTemplate?: TemplateRef<any>;
}
