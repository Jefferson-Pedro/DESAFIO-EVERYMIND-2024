import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Product } from 'src/app/core/models/Product';
import { ProductService } from '../../services';
import { NotificationService } from 'src/app/shared/service/notification';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent {

  private formBuilder = inject(NonNullableFormBuilder);
  private prodService = inject(ProductService);
  protected notificationService = inject(NotificationService);
  protected form = this.buildForm();
  private product!: Product;
  //protected title: String = 'Cadastrar um novo ';

  constructor(@Inject(MAT_DIALOG_DATA) private productData: Product) {
    console.log('Confirmando o obj enviado: ', productData);
    if (productData != null) {
        this.product = productData;
        this.fillForm(this.product);
        
    } else {
        console.log('Criação de novo produto');
    }
  }
  
  private buildForm(): FormGroup {
    return this.formBuilder.group({
      codProd: [null],
      nomeProd: ['', [Validators.required, Validators.minLength(3)]],
      descricaoProd: [''],
      precoProd: ['', Validators.required]
    });
  }

  private createOrUpdateProductPayLoad(): Product{
    const form = this.form.value;
    console.log('Formulario cru',form)
    return{
      codProd:form.codProd,
      nomeProd: form.nomeProd,
      descricaoProd: form.descricaoProd,
      precoProd: form.precoProd
    };
  }

  private createProduct(): void{
    const body = this.createOrUpdateProductPayLoad();
    console.log('Body', body);
    this.prodService.create(body).subscribe({
      next:(res) => {
        this.notificationService.showMessageSucess('Produto salvo com sucesso!');
        console.log(res);
        setTimeout(() => {
          window.location.reload(); // Recarregue a página após 2 segundos
        }, 2000);
      },
      error: (err) => {
        this.notificationService.showMessageFail(
          'Ocorreu um erro ao salvar as informações do produto.'
        );
        console.log(err);
      },
    })
  }

  private fillForm(product: Product): void{
    this.form.patchValue({
      codProd: product.codProd,
      nomeProd: product.nomeProd,
      descricaoProd: product.descricaoProd,
      precoProd:product.precoProd
    });
  }

  private editProduct(): void {
    const body = this.createOrUpdateProductPayLoad();

    this.prodService.update(body).subscribe({
      next: () => {
        console.log(body);
        this.notificationService.showMessageSucess(
          'Produto atualizado com sucesso!'
        );
        setTimeout(() => {
          window.location.reload(); // Recarregue a página após 2 segundos
        }, 2000);
      },
      error: () => {
        this.notificationService.showMessageFail(
          'Ocorreu um erro ao alterar as informações do produto'
        );
      },
      
    });
  }

  public onSubmit(): void{

    console.log(this.form.value);

    if (this.form.invalid) {
      this.notificationService.showMessageFail(
        'Preencha todos os campos corretamente!'
      );
      return; 
    }
    if (this.product != null) {
      this.editProduct();
      return;

    } else {
      this.createProduct();
    }
  }

}
