import {Route} from '@angular/router';

export const appRoutes: Route[] = [
  { path: 'cards', loadChildren: './cards/cards.module#CardsModule'},
  { path: 'home', loadChildren: './home/home.module#HomeModule'}
];
