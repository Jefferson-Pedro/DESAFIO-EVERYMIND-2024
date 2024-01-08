import { Component, inject } from '@angular/core';
import { Product } from 'src/app/core/models/Product';
import { ProductService } from '../../services';
import { MatDialog } from '@angular/material/dialog';
import { FormProductComponent } from '../form-product/form-product.component';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent {

  protected product: Product[] = [];
  private prodService = inject(ProductService);
  private dialog = inject(MatDialog);

  displayedColumns: string[] = ['codProd', 'nomeProd', 'descricaoProd', 'precoProd', 'actions'];

  length = 50;
  pageSize = 0;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 15];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  public constructor(){
    this.onListProduct();
  }

  public onListProduct(){
    this.prodService.list().subscribe({
      next:(res) => {
        console.log(res);
        this.product = res;
      },
      error:(err) => {
        console.log(err);
      },
    });
  }
  
  protected onCreateProduct(){
    const dialogRef = this.dialog.open(FormProductComponent);
  }
  protected onEdit(product: Product){}
  protected onDelete(product: Number){}
}
