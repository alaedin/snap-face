import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import {httpInterceptorProviders} from "./interceptor";
import {HeaderComponent} from "./components/header/header.component";
import {RouterModule} from "@angular/router";
import * as fr from "@angular/common/locales/fr";


@NgModule({
  declarations: [
    HeaderComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,

  ],
  providers: [
    httpInterceptorProviders,
    {provide: LOCALE_ID, useValue: 'fr-FR'},
  ],
  exports: [
    HeaderComponent,]
})
export class CoreModule {
  constructor() {
    registerLocaleData(fr.default)
  }
}
