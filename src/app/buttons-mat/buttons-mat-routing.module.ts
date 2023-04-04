import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsMatComponent } from './buttons-mat/buttons-mat.component';

const routes: Routes = [ 
  {path:"buttons", component: ButtonsMatComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonsMatRoutingModule { }
