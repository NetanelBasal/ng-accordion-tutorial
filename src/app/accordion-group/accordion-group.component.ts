import { Component, OnInit, ContentChild } from '@angular/core';
import { AccordionHeaderComponent } from '../accordion-header/accordion-header.component';
import { AccordionContentComponent } from '../accordion-content/accordion-content.component';

@Component({
  selector: 'app-accordion-group',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./accordion-group.component.scss']
})
export class AccordionGroupComponent {
  @ContentChild(AccordionHeaderComponent, { static: true }) header: AccordionHeaderComponent;
  @ContentChild(AccordionContentComponent, { static: true }) content: AccordionContentComponent;

  set isOpen(value: boolean) {
    this.header.isOpen = value;
    this.content.isOpen = value;
  }

  get isOpen() {
    return this.content.isOpen;
  }
}
