import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonsMatRoutingModule } from './buttons-mat-routing.module';
import { ButtonsMatComponent } from './buttons-mat/buttons-mat.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {DatepickerComponent} from './datepicker/datepicker.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {ModalComponent} from './modal/modal.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    ButtonsMatComponent,
    DatepickerComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    MatRadioModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatDialogModule,
    ButtonsMatRoutingModule
  ]
})
export class ButtonsMatModule { }
