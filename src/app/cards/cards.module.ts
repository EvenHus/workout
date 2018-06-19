import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CardsComponent} from './cards.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: ':name', component: CardsComponent}])
  ],
  declarations: [
    CardsComponent
  ],
  exports: [
    CardsComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})

export class CardsModule {}
