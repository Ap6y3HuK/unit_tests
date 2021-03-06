import { NgModule } from '@angular/core';

import { HomeComponent } from 'src/app/home/home.component';
import { AnyResource } from 'src/app/home/resources/AnyResource';
import { SimpleComponent } from 'src/app/home/simple/simple.component';

@NgModule({
  declarations: [
    HomeComponent,
    SimpleComponent
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
