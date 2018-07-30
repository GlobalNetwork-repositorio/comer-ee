import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { ItemEntregaModel } from '../../item-entrega/item-entrega-model';
import { ItemEntregaService } from '../../item-entrega/item-entrega.service';
import { ProductoPorNumeroEntregaService } from '../producto-por-numero-entrega.service';
import { ProductoPorNumeroEntregaModel } from '../producto-por-numero-entrega-model';
import { CatalogoProductoService } from '../../catalogo-producto/catalogo-producto.service';
import { CatalogoProductoModel } from '../../catalogo-producto/catalogo-producto-model';
import { isUndefined } from 'util';
import { BreakpointObserver } from '@angular/cdk/layout';


@Component({
  selector: 'app-producto-por-numero-entrega-main',
  templateUrl: './producto-por-numero-entrega-main.component.html',
  styleUrls: ['./producto-por-numero-entrega-main.component.css'],
  providers: [ItemEntregaService, ProductoPorNumeroEntregaService, CatalogoProductoService]
})
export class ProductoPorNumeroEntregaMainComponent implements OnInit {

  selectedRowIndex: string = "";

  dataForm: any;
  public anno: number = 2018;
  public numeroEntrega: number = 1;
  public titulo = "PRODUCTOS POR ITEM Y NUMERO DE ENTREGA";
  public itemEntregaModel: ItemEntregaModel;
  public itemEntregasModel: ItemEntregaModel[];

  public ProductoPorNumeroEntregasModel: ProductoPorNumeroEntregaModel[];

  public catalogoProductosModel: CatalogoProductoModel[];

  displayedColumns = ['entregaPorItem.itemEntrega.anno', 'entregaPorItem.numeroEntrega.numeroEntregaValor', 'entregaPorItem.itemEntrega.item', 'catalogoProductoQaliwarma.dscCatalogoProductoQaliwarma', 'edit'];

  selected: any;
  constructor(private formBuilder: FormBuilder, private itemEntregaService: ItemEntregaService,
    private productoPorNumeroEntregaService: ProductoPorNumeroEntregaService,
    private catalogoProductoService: CatalogoProductoService,
    breakpointObserver: BreakpointObserver
  ) { 

     breakpointObserver.observe(['(max-width: 600px)']).subscribe(result => {
      this.displayedColumns = result.matches ? 
      this.displayedColumns : 
      this.displayedColumns;
     });

  }

  ngOnInit() {
    this.numeroEntrega = parseInt(localStorage.getItem("numeroEntrega"));
    this.getCatalogoProducto();
    this.buildForm();
    this.getItems()
  }

  getCatalogoProducto() {
    this.catalogoProductoService.getAll()
      .subscribe(
        res => {
          this.catalogoProductosModel = res;
        }
      )
  }

  highlight(row) {
 
    this.selectedRowIndex = row.idProductoPorNumeroEntrega;
  }

  buildForm() {
    this.dataForm = this.formBuilder.group({
      anno: [this.anno, Validators.required],
      numeroEntrega: [this.numeroEntrega, Validators.required],


    })
  }


  compareFnProducto(t1: any, t2: any): boolean {

    debugger;
    if (t2.idCatalogoProductoQaliwarma == null || isUndefined(t2.idCatalogoProductoQaliwarma) || t1.idCatalogoProductoQaliwarma == null || isUndefined(t1.idCatalogoProductoQaliwarma))
      return;


    if (t1.idCatalogoProductoQaliwarma === t2.idCatalogoProductoQaliwarma) {
      return true;
    }

  }
  getItems() {
    this.itemEntregaService.getItems(this.anno)
      .subscribe(
        res => {
          this.itemEntregasModel = res;
        }
      )
  }

  getProductoPorNumeroEntregaPorNumeroEntregaAndAnnoAndItem() {

    this.productoPorNumeroEntregaService.getProductoPorNumeroEntregaPorNumeroEntregaAndAnnoAndItem(this.anno, this.numeroEntrega, this.selected)
      .subscribe(
        res => {

          this.ProductoPorNumeroEntregasModel = res;
          //this.ProductoPorNumeroEntregasModel.sort( (a,b) => b.catalogoProductoQaliwarma.dscCatalogoProductoQaliwarma - a.catalogoProductoQaliwarma.dscCatalogoProductoQaliwarma );
          console.log(this.ProductoPorNumeroEntregasModel);
        }
      )

  }

  cargarData() {
    this.numeroEntrega = this.dataForm.controls['numeroEntrega'].value;
    this.anno = this.dataForm.controls['anno'].value;
    this.getProductoPorNumeroEntregaPorNumeroEntregaAndAnnoAndItem();
  }


}
