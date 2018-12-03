import { NgModule } from '@angular/core';

import { HomeComponent } from 'src/app/home/home.component';
import { AnyResource } from 'src/app/home/resources/AnyResource';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [],
  providers: [
    AnyResource
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule {
}
