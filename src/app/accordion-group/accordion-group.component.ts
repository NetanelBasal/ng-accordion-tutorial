import { Component, ContentChild, ChangeDetectionStrategy } from '@angular/core';
import { AccordionHeaderComponent } from '../accordion-header/accordion-header.component';
import { AccordionContentComponent } from '../accordion-content/accordion-content.component';

@Component({
  selector: 'accordion-group',
  template: `
    <ng-content></ng-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionGroupComponent {
  @ContentChild(AccordionHeaderComponent, { static: true }) header: AccordionHeaderComponent;
  @ContentChild(AccordionContentComponent, { static: true }) content: AccordionContentComponent;

  toggle(value?: boolean) {
    this.header.isOpen = value ? value : !this.header.isOpen;
    this.content.isOpen = value ? value : !this.content.isOpen;
  }
}
