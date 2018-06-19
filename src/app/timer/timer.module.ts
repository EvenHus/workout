import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TimerComponent} from './timer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TimerComponent
  ],
  exports: [
    TimerComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})

export class TimerModule {}
