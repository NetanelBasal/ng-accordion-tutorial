import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionGroupComponent } from './accordion-group/accordion-group.component';
import { AccordionHeaderComponent } from './accordion-header/accordion-header.component';
import { AccordionContentComponent } from './accordion-content/accordion-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconComponent } from './icon/icon.component';
import { AccordionContentLazyDirective } from './accordion-content-lazy.directive';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { translocoLoader } from './transloco.loader';
import { TranslocoModule, TRANSLOCO_CONFIG, TranslocoConfig } from '@ngneat/transloco';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    AccordionGroupComponent,
    AccordionHeaderComponent,
    AccordionContentComponent,
    IconComponent,
    AccordionContentLazyDirective
  ],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, TranslocoModule],
  providers: [{
      provide: TRANSLOCO_CONFIG,
      useValue: {
        listenToLangChange: false,
        defaultLang: 'en',
        fallbackLang: 'es',
        prodMode: environment.production,
        scopeStrategy: 'shared'
      } as TranslocoConfig
    },
    translocoLoader
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
