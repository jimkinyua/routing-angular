import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SemanticUiModulesRoutingModule } from './semantic-ui-modules-routing.module';
import { SemanticUiModulesComponent } from './semantic-ui-modules/semantic-ui-modules.component';


@NgModule({
  declarations: [
    SemanticUiModulesComponent
  ],
  imports: [
    CommonModule,
    SemanticUiModulesRoutingModule
  ],
  exports: [
    SemanticUiModulesComponent
  ],

})
export class SemanticUiModulesModule { }
