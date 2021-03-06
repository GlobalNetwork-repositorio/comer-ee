import { Routes } from '@angular/router';

import { AdminLayoutComponent, AuthLayoutComponent } from './core';
import { AuthGuard } from './shared/guard/auth.guard';

export const AppRoutes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
      path: '',
      loadChildren: './dashboard/dashboard.module#DashboardModule',
      canActivate: [AuthGuard]
      },
      {
      path: 'qaliwarma/catalogo',
      loadChildren: './qaliwarma/catalogo-producto/catalogo-producto.module#CatalogoProductoModule'
      },
      {
        path: 'qaliwarma/producto-por-numero-entrega',
        loadChildren: './qaliwarma/producto-por-numero-entrega/producto-por-numero-entrega.module#ProductoPorNumeroEntregaModule'
      },
      {
        path: 'qaliwarma/centros-educativos',
        loadChildren: './qaliwarma/requerimiento-volumen-001/volumen-requerimiento-001.module#VolumenRequerimiento001Module'
      },
      {
        path: 'qaliwarma/rutas-distribucion',
        loadChildren: './qaliwarma/ruta-distribucion/ruta-distribucion.module#RutaDistribucionModule'
      }  ,
      {
        path: 'qaliwarma/guia',
        loadChildren: './qaliwarma/guia-remision/guia-remision.module#GuiaRemisionModule'
      }   ,
      {
        path: 'qaliwarma/impresion-guia',
        loadChildren: './qaliwarma/guia-remision/guia-remision.module#GuiaRemisionModule'
      }   
      ,{
        path : 'qaliwarma/consultas',
        loadChildren : './qaliwarma/consultas/consultas.module#ConsultasModule'
      },
      {
        path : 'qaliwarma/procesos',
        loadChildren : './qaliwarma/procesos/procesos.module#ProcesosModule'
      },
      {
        path : 'qaliwarma/parametros',
        loadChildren : './qaliwarma/parametros/parametros.module#ParametrosModule'
      },
      {
        path: 'configuracion/perfiles',
        loadChildren: './modulo-sistema-config/perfil/perfil.module#PerfilModule'        
      },
      {
        path: 'configuracion/usuarios',
        loadChildren: './modulo-sistema-config/usuario/usuario.module#UsuarioModule'
      },
      {
        path: 'configuracion/tipo.documento',
        loadChildren: './modulo-sistema-config/tipodocumento/tipodocumento.module#TipodocumentoModule'
      },
    ]
  }, 
 

  {
  path: '',
  component: AuthLayoutComponent,
  children: [{
    path: 'session',
    loadChildren: './session/session.module#SessionModule'
  }]
  }, 
   {
   path: '**',
   redirectTo: 'session/404'
   }
];
