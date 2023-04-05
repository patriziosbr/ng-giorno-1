import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsMatComponent } from './buttons-mat/buttons-mat.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ModalComponent } from './modal/modal.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [ 
  {path:"home", component: HomeComponent},
  {path:"buttons", component: ButtonsMatComponent},
  {path:"date", component: DatepickerComponent},
  {path:"modal", component: ModalComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonsMatRoutingModule { }
