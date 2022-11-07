import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollctionsRoutingModule } from './collctions-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';


@NgModule({
  declarations: [
    CollectionsHomeComponent
  ],
  imports: [
    CommonModule,
    CollctionsRoutingModule
  ],
})
export class CollctionsModule { }
