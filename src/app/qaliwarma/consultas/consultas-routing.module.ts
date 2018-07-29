import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ControlDespachoMainComponent } from './control-despacho/control-despacho-main/control-despacho-main.component';

const routes: Routes = [{
  path : '', component : MainComponent,
  children : [{
    path : 'control-despacho', component : ControlDespachoMainComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultasRoutingModule { }
