import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: HomeComponent}])
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})

export class HomeModule {}
