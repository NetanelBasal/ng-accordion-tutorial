import { Component, ElementRef, Input, ChangeDetectorRef, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'accordion-header',
  template: `
    <ng-content></ng-content>
  `,
  exportAs: 'accordionHeader',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class AccordionHeaderComponent {
  click$ = fromEvent(this.host.nativeElement, 'click');
  _isOpen = false;

  @Input()
  @HostBinding('class.accordion-open')
  set isOpen(value: boolean) {
    if (this.isOpen !== value) {
      this._isOpen = value;
      this.cdr.markForCheck();
    }
  }

  get isOpen() {
    return this._isOpen;
  }

  constructor(private host: ElementRef, private cdr: ChangeDetectorRef) {}
}
