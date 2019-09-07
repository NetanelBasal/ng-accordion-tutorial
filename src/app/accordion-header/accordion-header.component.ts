import { Component, ElementRef, Input, ChangeDetectorRef, HostBinding } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-accordion-header',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./accordion-header.component.scss']
})
export class AccordionHeaderComponent {
  click$ = fromEvent(this.host.nativeElement, 'click');
  _isOpen = false;

  constructor(private host: ElementRef, private cdr: ChangeDetectorRef) {}

  @Input()
  @HostBinding('class.accordion-open')
  set isOpen(value: boolean) {
    if (this.isOpen !== value) {
      this._isOpen = value;
      this.cdr.detectChanges();
    }
  }

  get isOpen() {
    return this._isOpen;
  }
}
