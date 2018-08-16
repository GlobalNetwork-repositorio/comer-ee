import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
  
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    state: '/',
    name: 'HOME',
    type: 'link',
    icon: 'explore'
  },

  {
    state: 'qaliwarma',
    name: 'QALIWARMA',
    type: 'sub',
    icon: 'apps',
    badge: [
      {type: 'red', value: '9'}
    ],
    children: [
      {state: 'catalogo', name: 'Catalogo de Productos'},
      {state: 'producto-por-numero-entrega', name: 'Producto Por Nro Entrega'},
      {state: 'centros-educativos', name: 'Centros Educativos'},
      {state: 'rutas-distribucion', name: 'Ruta de Distribucion'},
      {state: 'guia/actualiza' , name: 'Registro Nro Guia'},
      {state: 'guia/main', name: 'Impresion de Guias'},
      {state: 'consultas', name: 'Consultas'},
      {state: 'procesos', name: 'Procesos'},
      {state: 'parametros', name: 'Parametros'}
  
    ]
  },
  {
    state: 'almacen',
    name: 'ALMACEN',
    type: 'sub',
    icon: 'business',
    badge: [
      {type: 'red', value: '8'}
    ],
    children: [
      {state: 'catalogo', name: 'Catalogo de Productos'},
      {state: 'producto-por-numero-entrega', name: 'Producto Por Nro Entrega'},
      {state: 'centros-educativos', name: 'Centros Educativos'},
      {state: 'rutas-distribucion', name: 'Ruta de Distribucion'},
      {state: 'guia/actualiza' , name: 'Registro Nro Guia'},
      {state: 'guia/main', name: 'Impresion de Guias'},
      {state: 'consultas', name: 'Consultas'},
      {state: 'procesos', name: 'Procesos'},
      {state: 'parametros', name: 'Parametros'}
  
    ]
  },
  
  {
    state: 'compras',
    name: 'COMPRAS',
    type: 'sub',
    icon: 'store_mall_directory',
    badge: [
      {type: 'red', value: '8'}
    ],
    children: [
      {state: 'catalogo', name: 'Catalogo de Productos'},
      {state: 'producto-por-numero-entrega', name: 'Producto Por Nro Entrega'},
      {state: 'centros-educativos', name: 'Centros Educativos'},
      {state: 'rutas-distribucion', name: 'Ruta de Distribucion'},
      {state: 'guia/actualiza' , name: 'Registro Nro Guia'},
      {state: 'guia/main', name: 'Impresion de Guias'},
      {state: 'consultas', name: 'Consultas'},
      {state: 'procesos', name: 'Procesos'},
      {state: 'parametros', name: 'Parametros'}
  
    ]
  },

  {
    state: 'ventas',
    name: 'VENTAS',
    type: 'sub',
    icon: 'local_grocery_store',
    badge: [
      {type: 'red', value: '8'}
    ],
    children: [
      {state: 'catalogo', name: 'Catalogo de Productos'},
      {state: 'producto-por-numero-entrega', name: 'Producto Por Nro Entrega'},
      {state: 'centros-educativos', name: 'Centros Educativos'},
      {state: 'rutas-distribucion', name: 'Ruta de Distribucion'},
      {state: 'guia/actualiza' , name: 'Registro Nro Guia'},
      {state: 'guia/main', name: 'Impresion de Guias'},
      {state: 'consultas', name: 'Consultas'},
      {state: 'procesos', name: 'Procesos'},
      {state: 'parametros', name: 'Parametros'}
  
    ]
  },

  {
    state: 'configuracion',
    name: 'CONFIGURACION',
    type: 'sub',
    icon: 'local_grocery_store',
    badge: [
      { type: 'red', value: '2' }
    ],
    children: [
      { state: 'perfiles', name: 'Perfiles' },
      { state: 'usuarios', name: 'Usuarios' },
      { state: 'tipo.documento', name: 'Tipos de documentos' },
    ]
  },
  

  {
    state: 'http://primer.nyasha.me/docs',
    name: 'DOCS',
    type: 'extTabLink',
    icon: 'local_library'
  }
];

@Injectable()
export class MenuService {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  add(menu) {
    MENUITEMS.push(menu);
  }
}
