import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcesosRoutingModule } from './procesos-routing.module';
import { MainProcesosComponent } from './main-procesos/main-procesos.component';
import { CargarInfoMainComponent } from './cargar-info/cargar-info-main/cargar-info-main.component';
import { CalcularVolumenMainComponent } from './calcular-volumen/calcular-volumen-main/calcular-volumen-main.component';
import { BlockUIModule } from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { GenerarExcelMainComponent } from './generar-excel/generar-excel-main/generar-excel-main.component';


@NgModule({
  imports: [
    CommonModule,
    ProcesosRoutingModule,
    BlockUIModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  
    MatSidenavModule,
    MatCheckboxModule,
    MatListModule
  ],
  declarations: [MainProcesosComponent,CargarInfoMainComponent,CalcularVolumenMainComponent,GenerarExcelMainComponent]
})
export class ProcesosModule { }
