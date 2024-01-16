import { Component, inject } from '@angular/core';
import { Product } from 'src/app/core/models/Product';
import { ProductService } from '../../services';
import { MatDialog } from '@angular/material/dialog';
import { FormProductComponent } from '../form-product/form-product.component';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/service/notification';
import { PageEvent } from '@angular/material/paginator';
import { PaginatorConfig } from 'src/app/core/models/PaginatorConfig';
import { Observable, of } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent {

  protected product$!: Observable<Product[]>;
  private prodService = inject(ProductService);
  protected notificationService = inject(NotificationService);
  private dialog = inject(MatDialog);
  protected pageEvent: PageEvent | undefined;
  paginator: PaginatorConfig | undefined;

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
    this.onpageList();
  }

  handlePageEvent(e: PageEvent) {
    console.log('evento', e);
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;

    this.onpageList();
  }

  /*public onListProduct(){

    this.prodService.list().subscribe({
      next:(res) => {
        console.log(res);
        this.product = res;
      },
      error:(err) => {
        console.log(err);
      },
    });
  }*/
  
  protected onpageList(){
    this.prodService.getPageList(this.pageIndex, this.pageSize).subscribe({
      next: (res) => {
        console.log(res);
        this.product$ = of(res.content);
        this.paginator = res;
        this.length = this.paginator!.totalElements;
      },
      error: (err) => {
        this.notificationService.showMessageFail(
          'Erro ao carregar a lista de produtos!'
        );
        console.log(err);
        return of([]);
      },
    });
  }

  protected onCreateProduct(){
    const dialogRef = this.dialog.open(FormProductComponent);
  }

  protected onEdit(product: Product){
    const dialogRef = this.dialog.open(FormProductComponent, {
      data: product,
    });
  }
  protected onDelete(product: Product){
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
