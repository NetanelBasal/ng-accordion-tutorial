import {
  Component,
  OnInit,
  ContentChildren,
  QueryList,
  AfterContentInit,
  ChangeDetectionStrategy
} from '@angular/core';
import { AccordionGroupComponent } from '../accordion-group/accordion-group.component';
import { switchMap, startWith, mapTo } from 'rxjs/operators';
import { merge } from 'rxjs';

@Component({
  selector: 'accordion',
  template: `
    <ng-content></ng-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionComponent implements OnInit, AfterContentInit {
  @ContentChildren(AccordionGroupComponent) groups: QueryList<AccordionGroupComponent>;

  ngOnInit() {}
  ngAfterContentInit() {
    this.groups.changes
      .pipe(
        startWith(this.groups),
        switchMap((groups: QueryList<AccordionGroupComponent>) => {
          return merge(...groups.map(group => group.header.click$.pipe(mapTo(group))));
        })
      )
      .subscribe(group => {
        group.toggle();
      });
  }
}
