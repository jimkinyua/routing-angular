import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementHomeComponent } from './element-home/element-home.component';
import { ElementsRoutingModule } from './elements-routing.module';
import { PlaceHolderComponentComponent } from './place-holder-component/place-holder-component.component';
import { LinesDirective } from './lines.directive';
import { SegmentComponentComponent } from '../Shared/segment-component/segment-component.component';
@NgModule({
  declarations: [
    ElementHomeComponent,
    PlaceHolderComponentComponent,
    LinesDirective,
    SegmentComponentComponent
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule
  ],
})
export class ElementsModule { }
