import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[cpTracking]',
})
export class TrackingDirective {
  @Input() cpTracking?: string;
  @Input() itemId?: string;

  constructor() {}

  @HostListener('click') clickItem() {
    console.log('TRACKING', this.cpTracking, this.itemId);
  }
}
