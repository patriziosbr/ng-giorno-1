import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonsMatRoutingModule } from './buttons-mat-routing.module';
import { ButtonsMatComponent } from './buttons-mat/buttons-mat.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    ButtonsMatComponent
  ],
  imports: [
    CommonModule,
    MatRadioModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    ButtonsMatRoutingModule
  ]
})
export class ButtonsMatModule { }
