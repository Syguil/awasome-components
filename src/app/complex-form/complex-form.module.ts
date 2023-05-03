import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplexFormRoutingModule } from './complex-form-routing.module';
import { ComplexFormComponent } from './components/complex-form/complex-form.component';
import { SharedModule } from '../shared/shared.module';
import { ComplexFormService } from './services/complex-form.service';
import { MaterialModule } from '../shared/material.module';
import { validValidator } from './validators/valid.validator';
import { confirmEqualValidator } from './validators/confirm-equal.validator';


@NgModule({
  declarations: [
    ComplexFormComponent
  ],
  imports: [
    CommonModule,
    ComplexFormRoutingModule,
    MaterialModule,
    SharedModule
  ],
  providers : [
    ComplexFormService,
    //validValidator,
    //confirmEqualValidator

  ]
})
export class ComplexFormModule { }