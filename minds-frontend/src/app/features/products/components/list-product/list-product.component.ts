import { Component, inject } from '@angular/core';
import { Product } from 'src/app/core/models/Product';
import { ProductService } from '../../services';
import { MatDialog } from '@angular/material/dialog';
import { FormProductComponent } from '../form-product/form-product.component';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/service/notification';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent {

  protected product: Product[] = [];
  private prodService = inject(ProductService);
  protected notificationService = inject(NotificationService);
  private dialog = inject(MatDialog);
  private router = inject(Router);

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

  protected onEdit(product: Product){
    console.log(product);
    const dialogRef = this.dialog.open(FormProductComponent, {
      data: { action: 'edit', product },
    });
  }
  protected onDelete(product: Product){
    console.log(product.codProd);
    this.prodService.delete(product.codProd).subscribe({
      next: () => {
        this.notificationService.showMessageSucess('Sucesso! Produto excluído');
        setTimeout(() => {
          window.location.reload(); // Recarregue a página após 2 segundos
        }, 2000);
      },
      error: () => {
        this.notificationService.showMessageFail(
          'Ocorreu um erro ao excluir o produto.'
        );
      },
    });
  }
}
