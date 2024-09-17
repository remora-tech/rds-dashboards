import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './modules/components/components.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { registerLocaleData } from '@angular/common'
import localePt from '@angular/common/locales/pt';

const LOCALE = 'pt-BR';
registerLocaleData(localePt, LOCALE);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
  ],
  providers: [
    provideAnimationsAsync(),
    { provide: LOCALE_ID, useValue: LOCALE },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
