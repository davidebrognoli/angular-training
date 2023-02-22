import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cp-print-information',
  standalone: true,
  imports: [CommonModule],
  preserveWhitespaces: true,
  template: `
    <b *ngIf="title">{{ title }}</b
    >:<br />
    <ng-content></ng-content>

    <!-- <ng-container
      [ngTemplateOutlet]="!componentTemplate ? defaultView : componentTemplate"
      [ngTemplateOutletContext]="{ $implicit: value, title: title }"
    ></ng-container>

    <ng-template #defaultView>
      <p>
        <b *ngIf="title">{{ title }}:</b>
        {{ value }}
      </p>
    </ng-template> -->
  `,
  styles: [
    `
      cp-print-information {
        display: block;

        & + cp-print-information {
          margin-top: 12px;
        }
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class PrintInformationComponent {
  @Input() title!: string;
}
