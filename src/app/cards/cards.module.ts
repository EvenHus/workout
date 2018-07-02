import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';

import {CardsComponent} from './cards.component';
import {RouterModule} from '@angular/router';
import {TimerModule} from '../timer/timer.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: ':name', component: CardsComponent}]),
    TimerModule,
    NgxPaginationModule
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
