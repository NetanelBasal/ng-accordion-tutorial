import {
  Component,
  OnInit,
  ContentChildren,
  QueryList,
  AfterContentInit,
  SkipSelf,
  Optional,
  ElementRef
} from '@angular/core';
import { AccordionGroupComponent } from '../accordion-group/accordion-group.component';
import { switchMap, startWith, mapTo } from 'rxjs/operators';
import { merge } from 'rxjs';

@Component({
  selector: 'app-accordion',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit, AfterContentInit {
  @ContentChildren(AccordionGroupComponent) groups: QueryList<AccordionGroupComponent>;
  // @ContentChildren(AccordionComponent, { descendants: true }) accordionChilds: QueryList<AccordionComponent>;

  ngOnInit() {}
  closeOthers = true;
  ngAfterContentInit() {
    this.groups.changes
      .pipe(
        startWith(this.groups),
        switchMap((groups: QueryList<AccordionGroupComponent>) => {
          return merge(...groups.map(group => group.header.click$.pipe(mapTo(group))));
        })
      )
      .subscribe(group => {
        group.isOpen = !group.isOpen;
        // if (group.isOpen && this.closeOthers) {
        //   this.accordionChilds.forEach(accordion => {
        //     accordion.groups.forEach(g => {
        //       if (group !== g) {
        //         g.isOpen = false;
        //       }
        //     });
        //   });
        // }

        // if (group.isOpen === false) {
        //   // content child add itself?
        //   this.accordionChilds
        //     .filter(c => c !== this)
        //     .forEach(accordion => accordion.groups.forEach(group => (group.isOpen = false)));
        // }
      });
  }
}
