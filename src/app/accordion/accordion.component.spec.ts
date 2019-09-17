import { createHostFactory, SpectatorHost } from '@ngneat/spectator';
import { AccordionComponent } from './accordion.component';
import { AccordionHeaderComponent } from '../accordion-header/accordion-header.component';
import { AccordionContentComponent } from '../accordion-content/accordion-content.component';
import { AccordionGroupComponent } from '../accordion-group/accordion-group.component';

describe('AccordionComponent', () => {
  let spectator: SpectatorHost<AccordionComponent>;
  const createHost = createHostFactory({
    component: AccordionComponent,
    declarations: [AccordionHeaderComponent, AccordionContentComponent, AccordionGroupComponent]
  });

  it('should toggle the content when clicking on the header', () => {
    spectator = createHost(`
        <accordion>
          <accordion-group>
            <accordion-header>
              Title
            </accordion-header>
            <accordion-content>
              <h2>Description</h2>
            </accordion-content>
          </accordion-group>
      </accordion>
    `);

    expect('h2').not.toExist();
    spectator.click('accordion-header');
    expect('h2').toExist();
  });
});
