import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultasRoutingModule } from './consultas-routing.module';
import { MainComponent } from './main/main.component';
import { ControlDespachoMainComponent } from './control-despacho/control-despacho-main/control-despacho-main.component';
import { ValorizacionMainComponent } from './valorizacion/valorizacion-main/valorizacion-main.component';
import { SharedModule } from '../../shared/shared.module';
import {BlockUIModule} from 'primeng/blockui';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {MatSidenavModule} from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material';
import {MatListModule} from '@angular/material/list';


@NgModule({
  imports: [
    CommonModule,
    BlockUIModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ConsultasRoutingModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatListModule
  ],
  declarations: [MainComponent, ControlDespachoMainComponent, ValorizacionMainComponent]
})
export class ConsultasModule { }
