import { Component, OnInit, Input, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-accordion-content',
  template: `
    <div *ngIf="isOpen" [@slideInOut]>
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      :host {
        overflow: hidden;
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slideInOut', [
      transition(':enter', [style({ height: '0px' }), animate('200ms', style({ height: '*' }))]),
      transition(':leave', [style({ height: '*' }), animate('200ms', style({ height: '0px' }))])
    ])
  ]
})
export class AccordionContentComponent {
  _isOpen = false;

  @Input()
  set isOpen(value: boolean) {
    if (this._isOpen !== value) {
      this._isOpen = value;
      this.cdr.detectChanges();
    }
  }

  get isOpen() {
    return this._isOpen;
  }

  constructor(private cdr: ChangeDetectorRef) {}
}
