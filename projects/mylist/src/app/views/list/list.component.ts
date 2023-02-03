import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/list.model';

@Component({
  selector: 'cp-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() public tasks?: Task[];
  @Output() public increment: EventEmitter<null> = new EventEmitter();

  handleClick() {
    this.increment.emit();
  }
}
