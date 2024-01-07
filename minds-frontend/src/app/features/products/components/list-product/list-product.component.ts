import { Component } from '@angular/core';
import { Product } from 'src/app/core/models/Product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent {

  protected product: Product[] = [];


  displayedColumns: string[] = ['codProd', 'nomeProd', 'descricaoProd', 'precoProd', 'actions'];

  length = 50;
  pageSize = 0;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 15];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  public constructor(){}
  
  protected onCreateProduct(){}
  protected onEdit(product: Product){}
  protected onDelete(product: Number){}
}
