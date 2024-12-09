import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompagnyRoutingModule } from './compagny-routing.module';
import { CompagnyComponent } from './compagny.component';


@NgModule({
  declarations: [
    CompagnyComponent
  ],
  imports: [
    CommonModule,
    CompagnyRoutingModule
  ]
})
export class CompagnyModule { }
